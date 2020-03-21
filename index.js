import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { Platform, UIManager } from 'react-native';

import { App } from './src/app';
import { name as appName } from './app.json';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

AppRegistry.registerComponent(appName, () => App);
