import codePush from 'react-native-code-push';
import { CodePushStore } from './stores/code-push-store';

export const includeCodePush = (Component: () => JSX.Element) =>
  codePush({
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    deploymentKey: CodePushStore.productionDeploymentKey,
  })(Component);
