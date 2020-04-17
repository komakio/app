import React from 'react';
import { Providers } from './providers';
import { Router } from './router';
import { Layout } from './layout/layout';

import { includeCodePush } from './code-push';

export const App = includeCodePush(() => {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  );
});
