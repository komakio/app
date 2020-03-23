import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export class Messaging {
  public static async registerForRemoteNotifications() {
    await messaging().registerForRemoteNotifications();
  }

  public static async requestPermission() {
    await PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
    });
    return messaging().requestPermission();
  }

  public static async getToken() {
    return messaging().getToken();
  }
}
