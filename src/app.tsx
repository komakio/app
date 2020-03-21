import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { OnBoarding } from './modules/on-boarding/page';
import { Login } from './modules/auth/login';
import { CreateProfileType } from './modules/profile/create/type';
import { CreateProfileInfo } from './modules/profile/create/infos';
import { MapTest } from './modules/map';
import i18n from './i18n';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#abecd6',
    accent: '#FF719A',
    // background: 'white',
  },
};

export const App = memo(() => {
  return (
    <I18nextProvider i18n={i18n}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyle: { backgroundColor: 'white' },
              headerStyle: { backgroundColor: theme.colors.primary },
            }}
          >
            <Stack.Screen
              options={{ headerShown: false }}
              name="OnBoarding"
              component={OnBoarding}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                // headerStyle: { backgroundColor: '#6200ee', borderBottomWidth: 0 },
                // cardStyle: { backgroundColor: '#6200ee', borderTopWidth: 0 },
                headerTintColor: 'white',
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                // headerStyle: { backgroundColor: 'blue', borderBottomWidth: 0 },
                // headerTitleStyle: { color: 'white' },
                // cardStyle: { backgroundColor: '#6200ee', borderTopWidth: 0 },
                // headerTintColor: 'blue',
                // headerTransparent: true,
              }}
              name="CreateProfile-Type"
              component={CreateProfileType}
            />
            <Stack.Screen
              options={
                {
                  // headerShown: false,
                  // headerStyle: { backgroundColor: 'blue', borderBottomWidth: 0 },
                  // headerTitleStyle: { color: 'white' },
                  // cardStyle: { backgroundColor: '#6200ee', borderTopWidth: 0 },
                  // headerTintColor: 'blue',
                  // headerTransparent: true,
                }
              }
              name="CreateProfile-Infos"
              component={CreateProfileInfo}
            />
            <Stack.Screen
              options={
                {
                  // headerShown: false,
                  // headerStyle: { backgroundColor: 'blue', borderBottomWidth: 0 },
                  // headerTitleStyle: { color: 'white' },
                  // cardStyle: { backgroundColor: '#6200ee', borderTopWidth: 0 },
                  // headerTintColor: 'blue',
                  // headerTransparent: true,
                }
              }
              name="Map"
              component={MapTest}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <OnBoarding /> */}
      </PaperProvider>
    </I18nextProvider>
  );
});
