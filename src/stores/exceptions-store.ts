import * as Sentry from '@sentry/react-native';

import { Environment } from 'environment';
import { RootStore } from './root-store';
import { useEffect } from 'react';
import { autorun } from 'mobx';

export class ExceptionsStore {
  constructor(private rootStore: RootStore) {
    autorun(() => {
      const { userStore } = this.rootStore;
      if (userStore.profile) {
        Sentry.setUser({
          id: userStore.user?._id,
          user: userStore.user,
          profiles: userStore.profiles,
        });
      } else {
        Sentry.setUser(null);
      }
    });

    if (Environment.environment === 'development') {
      return;
    }

    Sentry.init({
      dsn: Environment.sentryDsn,
      environment: Environment.environment,
    });
  }

  public report(err: Error) {
    Sentry.captureException(err);
  }

  public report(err: Error) {
    Sentry.captureException(err);
  }
}
