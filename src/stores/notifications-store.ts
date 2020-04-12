import { RootStore } from './root-store';
import { Messaging } from '@utils/messaging';
import { UsersApi } from '@api/user';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { autorun, observable } from 'mobx';
import { Platform } from 'react-native';

export class NotificationsStore {
  @observable
  public registrationToken: string;

  constructor(private rootStore: RootStore) {
    autorun(() => {
      if (
        this.rootStore.userStore.accessToken?.token &&
        this.registrationToken
      ) {
        this.synchronizeToken();
      }
    });
  }

  public async showAllAsSeen() {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.setApplicationIconBadgeNumber(0);
    }
  }

  public async registerForNotifications() {
    await Messaging.requestPermission();
    await Messaging.registerForRemoteNotifications();
    Messaging.onMessage(() => {
      this.rootStore.requestsStore.getRequests();
    });
    Messaging.onToken((registrationToken) => {
      this.registrationToken = registrationToken;
    });
  }

  public async synchronizeToken() {
    await UsersApi.patchRegistrationToken(
      this.rootStore.userStore.accessToken?.token,
      this.registrationToken
    );
  }
}
