import * as Sentry from '@sentry/react-native';

import { Environment } from 'environment';
import { RootStore } from './root-store';

export class ExceptionsStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    if (Environment.environment === 'development') {
      return;
    }
    try {
      Sentry.init({
        dsn: 'https://70da0c24b7a04d41939443ccc906ef98@sentry.anchor.io/16',
      });
    } catch {
      /* Do nothing - TODO remove that when production deployment */
    }
  }
}
