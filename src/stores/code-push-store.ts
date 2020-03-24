import { RootStore } from './root-store';
import Config from 'react-native-config';
import { Platform, Alert } from 'react-native';

import codePush from 'react-native-code-push';
import { Storage } from '../utils/storage';

export class CodePushStore {
  public rootStore: RootStore;

  public static stagingDeploymentKey =
    Platform.OS === 'android'
      ? '5Y3U4MWdzy--Nd1i5umViwUdS32ZJCM_uEZNl'
      : '5TWgub28x8nlu7AY4v5SbuA1TILOwIPxKWvN9';

  public static productionDeploymentKey =
    Platform.OS === 'android'
      ? 'N_nJNCoRLvaD0gmRs50JJ3paAWYrsaEzTDEC1'
      : 'XU8swVJBxfuXPleTwVlul4lhUhhmowvrAQFAW';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.init();
  }

  private async init() {
    const isBeta = await Storage.get('beta');

    if (isBeta) {
      codePush.sync({ deploymentKey: CodePushStore.stagingDeploymentKey });
    }
  }
}
