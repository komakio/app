import { RootStore } from './root-store';
import { Messaging } from '../utils/messaging';
import { UsersApi } from '../api/user';

export class NotificationsStore {
  private registrationToken: string;

  constructor(private rootStore: RootStore) {}

  public async registerForNotifications() {
    await Messaging.requestPermission();
    await Messaging.registerForRemoteNotifications();
    Messaging.onMessage();
    Messaging.onToken((registrationToken) => {
      this.registrationToken = registrationToken;
      this.synchronizeToken();
    });
  }

  public async synchronizeToken() {
    await UsersApi.patchRegistrationToken(
      this.rootStore.userStore?.accessToken?.token,
      this.registrationToken
    );
  }
}
