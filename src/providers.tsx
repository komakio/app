import React, { memo } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { RootStore, RootStoreContext } from './stores/root-store';
import { NavigationContainer } from '@react-navigation/native';

export const Providers = memo(({ children }) => {
  const rootStore = new RootStore();
  return (
    <RootStoreContext.Provider value={rootStore}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>{children}</NavigationContainer>
      </I18nextProvider>
    </RootStoreContext.Provider>
  );
});
