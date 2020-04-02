import codePush from 'react-native-code-push';
import { Environment } from './environment';

export const includeCodePush = (Component: () => JSX.Element) =>
  codePush({
    checkFrequency: codePush.CheckFrequency.MANUAL,
    deploymentKey: Environment.codePushDeploymentKey,
  })(Component);
