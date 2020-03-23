import { RootStore } from './root-store';
import { Messaging } from '../utils/messaging';

export class NotificationsStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.init();
  }

  public async registerForNotifications() {
    await Messaging.requestPermission();

    Messaging.onToken(registrationToken => {
      console.log(registrationToken);
    });
  }

  private async init() {
    await Messaging.registerForRemoteNotifications();

    Messaging.onMessage();
  }
}
