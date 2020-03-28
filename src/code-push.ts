import codePush from 'react-native-code-push';
import { CodePushStore } from './stores/code-push-store';
import { Environment } from './environment';

export const includeCodePush = (Component: () => JSX.Element) =>
  codePush({
    checkFrequency: codePush.CheckFrequency.MANUAL,
    deploymentKey: Environment.codePushDeploymentKey,
  })(Component);
