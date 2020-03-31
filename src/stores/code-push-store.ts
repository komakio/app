import { RootStore } from './root-store';

import codePush from 'react-native-code-push';
import { Environment } from '../environment';

export class CodePushStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.init();
  }

  public async initialCheck() {
    const update = await codePush.checkForUpdate(
      Environment.codePushDeploymentKey
    );
    if (update && update.isMandatory) {
      const codePushPackage = await update.download();
      await codePushPackage.install(codePush.InstallMode.IMMEDIATE);
    } else if (update) {
      update
        .download()
        .then((codePushPackage) =>
          codePushPackage.install(codePush.InstallMode.ON_NEXT_SUSPEND)
        );
    }
  }

  private async init() {
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
      installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
    });
  }
}
