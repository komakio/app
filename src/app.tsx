import React, {memo} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Main} from './index';

export const App = memo(() => {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
});
