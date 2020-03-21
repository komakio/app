import React, { memo } from 'react';
import { Providers } from './providers';
import { Router } from './router';
import { Layout } from './layout';

export const App = memo(() => {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  );
});
