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
        dsn: Environment.sentryDsn,
      });
    } catch {
      /* Do nothing - TODO remove that when production deployment */
    }
  }
}
