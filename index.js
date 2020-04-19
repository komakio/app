import 'react-native-gesture-handler';
import RN, { YellowBox, AppRegistry, Platform, UIManager } from 'react-native';

import { App } from './src/app';
import { name as appName } from './app.json';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

try {
  RN.unstable_enableLogBox();
} catch {
  // TODO: remove that when 0.62 PR is merged
}
YellowBox.ignoreWarnings([
  `Warning: Picker has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/picker' instead of 'react-native'`,
]);

AppRegistry.registerComponent(appName, () => App);
