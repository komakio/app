import { RootStore } from './root-store';
import { UsersApi } from '../api/user';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
import { Alert } from 'react-native';
import { LoginResult } from '../models/user';
import { AxiosError } from 'axios';
import { Environment } from '../environment';

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

  public async googleLogin(): Promise<LoginResult> {
    try {
      //   await GoogleSignin.hasPlayServices();
      console.log('Try to login');
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      const firstName = userInfo.user.givenName;
      const lastName = userInfo.user.familyName;

      const data = await UsersApi.loginGoogle(userInfo.idToken);
      this.rootStore.profileFlowStore.firstName = firstName;
      this.rootStore.profileFlowStore.lastName = lastName;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      console.log((error as AxiosError)?.response.data);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return null;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      Alert.alert('Google login failed');
      return null;
    }
  }

  public async appleLogin(): Promise<LoginResult> {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });

      const firstName = appleAuthRequestResponse.fullName.givenName;
      const lastName = appleAuthRequestResponse.fullName.familyName;
      const data = await UsersApi.loginApple(
        appleAuthRequestResponse.identityToken
      );

      this.rootStore.profileFlowStore.firstName = firstName;
      this.rootStore.profileFlowStore.lastName = lastName;

      return data;
    } catch (e) {
      console.log(e);
      Alert.alert('Apple login failed');
      return null;
    }
  }
}
