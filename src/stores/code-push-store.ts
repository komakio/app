import { RootStore } from './root-store';

import codePush from 'react-native-code-push';
import { Environment } from '../environment';

export class CodePushStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.init();
  }

  private async init() {
    this.sync();
    setInterval(() => {
      this.sync();
    }, 10 * 60 * 1000);

    this.rootStore.appStateStore.onResume(() => {
      this.sync();
    });
  }

  private async sync() {
    if (!Environment.codePushDeploymentKey) {
      console.log('Should sync, but in dev mode.');
      return;
    }
    codePush.sync({
      deploymentKey: Environment.codePushDeploymentKey,
    });
  }
}
