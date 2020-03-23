import messaging from '@react-native-firebase/messaging';
import { requestNotifications } from 'react-native-permissions';
import iid from '@react-native-firebase/iid';

import { RootStore } from './root-store';
import { Messaging } from '../utils/messaging';
import { Alert } from 'react-native';

export class NotificationsStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.init();
  }

  public async registerForNotifications() {
    await Messaging.requestPermission();
    const registrationToken = await messaging().getToken();
    messaging().onTokenRefresh(token => {
      console.log(token);
    });
    console.log(registrationToken);
  }

  private async init() {
    await Messaging.registerForRemoteNotifications();

    messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);
      Alert.alert('MESSAGE');

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
