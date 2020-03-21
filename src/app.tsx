import React, { memo } from 'react';
import { Providers } from './providers';
import { Router } from './router';
import { Intro } from './intro';

export const App = memo(() => {
  return (
    <Providers>
      <Intro>
        <Router />
      </Intro>
    </Providers>
  );
});
