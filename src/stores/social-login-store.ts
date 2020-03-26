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

export class SocialLoginStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    GoogleSignin.configure({
      forceCodeForRefreshToken: true,
    });
  }

  public async googleLogin(): Promise<LoginResult> {
    try {
      //   await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const firstName = userInfo.user.givenName;
      const lastName = userInfo.user.familyName;

      const data = await UsersApi.loginGoogle(userInfo.idToken);
      this.rootStore.profileFlowStore.firstName = firstName;
      this.rootStore.profileFlowStore.lastName = lastName;

      return data;
    } catch (error) {
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
