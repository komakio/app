import React, { memo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { OnBoarding } from './modules/on-boarding/page';

export const App = memo(() => {
  return (
    <PaperProvider>
      <OnBoarding />
    </PaperProvider>
  );
});
