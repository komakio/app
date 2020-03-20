import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { OnBoarding } from './modules/on-boarding/page';
import { Login } from './modules/auth/login';
import { CreateProfileType } from './modules/profile/create/type';
import { CreateProfileInfo } from './modules/profile/create/infos';

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
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: 'white' },
            headerStyle: { backgroundColor: theme.colors.primary },
          }}
        >
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="OnBoarding"
            component={OnBoarding}
          /> */}
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
        </Stack.Navigator>
      </NavigationContainer>
      {/* <OnBoarding /> */}
    </PaperProvider>
  );
});
