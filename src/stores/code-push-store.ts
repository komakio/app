import { RootStore } from './root-store';

import codePush from 'react-native-code-push';
import { Environment } from 'environment';
import { waitForSomeMs } from '@utils/timeout';
import { observable } from 'mobx';

export class CodePushStore {
  @observable
  public downloadProgress: number;

  constructor(private rootStore: RootStore) {
    this.init();
  }

  public async initialCheck() {
    if (!Environment.codePushDeploymentKey) {
      console.log('Should sync, but in dev mode.');
      return;
    }
    const update = await codePush.checkForUpdate(
      Environment.codePushDeploymentKey
    );
    if (update && update.isMandatory) {
      const codePushPackage = await update.download((progress) => {
        this.downloadProgress = Math.round(
          (progress.receivedBytes / progress.totalBytes) * 100
        );
      });
      this.downloadProgress = null;
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
