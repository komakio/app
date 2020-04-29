import React, { memo, useRef, useState, useCallback } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n';
import { RootStore, RootStoreContext } from './stores/root-store';
import { NavigationContainer } from '@react-navigation/native';
import { RouterContext } from '@modules/router-provider';

const rootStore = new RootStore();

export const Providers = memo(({ children }) => {
  const [routeName, setRouteName] = useState<string>('intro');

  const onChangeState = useCallback((state) => {
    const mainRoute = state.routes?.[state.routes?.length - 1];
    if (mainRoute?.name !== 'Main') {
      setRouteName(mainRoute?.name);
      return;
    }

    const routes = mainRoute?.state?.routes;
    if (routes) {
      setRouteName(routes[routes.length - 1].name);
      return;
    }
  }, []);

  return (
    <RootStoreContext.Provider value={rootStore}>
      <I18nextProvider i18n={i18n}>
        <RouterContext.Provider value={routeName}>
          <NavigationContainer onStateChange={onChangeState}>
            {children}
          </NavigationContainer>
        </RouterContext.Provider>
      </I18nextProvider>
    </RootStoreContext.Provider>
  );
});
