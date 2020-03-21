import React, { memo } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { RootStore, RootStoreContext } from './stores/root-store';

export const Providers = memo(({ children }) => {
  const rootStore = new RootStore();
  return (
    <RootStoreContext.Provider value={rootStore}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </RootStoreContext.Provider>
  );
});
