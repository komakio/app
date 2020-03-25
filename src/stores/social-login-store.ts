import { RootStore } from './root-store';
import { UsersApi } from '../api/user';
import { Storage } from '../utils/storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';

export class SocialLoginStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    GoogleSignin.configure({
      //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      //   webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
      //   offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //   hostedDomain: '', // specifies a hosted domain restriction
      //   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //   accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId:
        '153461499435-0kruiebmi9ikjpg4fv531eli76oe1kgr.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  public async googleLogin() {
    try {
      console.log('user info');
      //   await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      return true;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }

      return false;
    }
  }

  public async appleLogin() {
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
    // const email = appleAuthRequestResponse.email;
    await UsersApi.loginApple(appleAuthRequestResponse.identityToken);

    this.rootStore.profileFlowStore.firstName = firstName;
    this.rootStore.profileFlowStore.lastName = lastName;

    return true;
  }
}
