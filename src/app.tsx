import React from 'react';
import { Providers } from './providers';
import { Router } from './router';
import { Layout } from './layout/layout';

import { includeCodePush } from './code-push';
import { Alert } from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const isHermes = () => !!global.HermesInternal;
if (isHermes()) {
  Alert.alert('Hermes');
}

export const App = includeCodePush(() => {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  );
});
