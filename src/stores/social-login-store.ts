import { RootStore } from './root-store';
import { UsersApi } from '../api/user';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  RNAppleAuth,
} from '@invertase/react-native-apple-authentication';
import { Alert } from 'react-native';
import { LoginResult } from '@models/user';
import { AxiosError } from 'axios';
import { Environment } from 'environment';
import {
  LoginManager as FacebookLoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export class SocialLoginStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    GoogleSignin.configure({
      forceCodeForRefreshToken: true,
      iosClientId: Environment.iosGoogleClientId,
      webClientId:
        '50726922019-2n2928603iapbq7kslc4leo7ikgs5l7b.apps.googleusercontent.com',
    });
  }

  public async facebookLogin(): Promise<LoginResult> {
    try {
      const response = await FacebookLoginManager.logInWithPermissions([
        'public_profile',
      ]);
      if (response.isCancelled) {
        return;
      }

      const infoRequest = new GraphRequest('/me', null, (err, response) => {
        if (err) {
          return;
        }
        const name = (response as any)?.name;
        if (name.indexOf(' ') === -1) {
          this.rootStore.profileFlowStore.firstName = name;
          return;
        }

        this.rootStore.profileFlowStore.firstName = name
          .split(' ')
          .slice(0, -1)
          .join(' ');
        this.rootStore.profileFlowStore.lastName = name
          .split(' ')
          .slice(-1)
          .join(' ');
      });
      new GraphRequestManager().addRequest(infoRequest).start();

      const tokens = await AccessToken.getCurrentAccessToken();

      const data = await UsersApi.loginFacebook(tokens.accessToken);
      console.log(data);
      return data;
    } catch (error) {
      this.rootStore.exceptionsStore.report(error);
      return null;
    }
  }
  public async googleLogin(): Promise<LoginResult> {
    try {
      const userInfo = await GoogleSignin.signIn();
      const firstName = userInfo.user.givenName;
      const lastName = userInfo.user.familyName;

      const data = await UsersApi.loginGoogle(userInfo.idToken);
      this.rootStore.profileFlowStore.firstName = firstName;
      this.rootStore.profileFlowStore.lastName = lastName;
      return data;
    } catch (error) {
      console.log(error);
      console.log((error as AxiosError)?.response);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return null;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        this.rootStore.exceptionsStore.report(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        this.rootStore.exceptionsStore.report(error);
        // play services not available or outdated
      } else {
        this.rootStore.exceptionsStore.report(error);
        // some other error happened
      }
      Alert.alert('Google login failed');
      return null;
    }
  }

  public async appleLogin(): Promise<LoginResult> {
    let appleAuthRequestResponse: RNAppleAuth.AppleAuthRequestResponse;
    try {
      // performs login request
      appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });
    } catch (e) {
      return null;
    }
    try {
      const firstName = appleAuthRequestResponse.fullName.givenName;
      const lastName = appleAuthRequestResponse.fullName.familyName;
      const data = await UsersApi.loginApple(
        appleAuthRequestResponse.identityToken
      );

      this.rootStore.profileFlowStore.firstName = firstName;
      this.rootStore.profileFlowStore.lastName = lastName;

      return data;
    } catch (e) {
      Alert.alert('Apple login failed');
      return null;
    }
  }
}
