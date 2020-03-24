import codePush from 'react-native-code-push';
import { CodePushStore } from './stores/code-push-store';

export const includeCodePush = (Component: () => JSX.Element) =>
  codePush({
    checkFrequency: codePush.CheckFrequency.MANUAL,
    deploymentKey: CodePushStore.productionDeploymentKey,
  })(Component);
