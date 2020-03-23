import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import DeviceInfo from 'react-native-device-info';
import { Alert } from 'react-native';

export class Messaging {
  public static async registerForRemoteNotifications() {
    if (await DeviceInfo.isEmulator()) {
      return;
    }
    await messaging().registerForRemoteNotifications();
  }

  public static async requestPermission() {
    if (await DeviceInfo.isEmulator()) {
      return;
    }
    await PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
    });
    return messaging().requestPermission();
  }

  public static async onToken(cb: (token: string) => void) {
    if (await DeviceInfo.isEmulator()) {
      return;
    }
    const token = await messaging().getToken();
    cb(token);

    messaging().onTokenRefresh(cb);
  }

  public static onMessage(cb?: () => void) {
    messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);
      // Alert.alert('MESSAGE');

      //   // Update a users messages list using AsyncStorage
      //   const currentMessages = await AsyncStorage.getItem('messages');
      //   const messageArray = JSON.parse(currentMessages);
      //   messageArray.push(remoteMessage.data);
      //   await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      Alert.alert('BACKGROUND');
    });
  }
}
