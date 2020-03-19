import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { OnBoarding } from './modules/on-boarding/page';
import { Login } from './modules/auth/login';
import { CreateProfileType } from './modules/profile/create/type';

const Stack = createStackNavigator();

export const App = memo(() => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
              // headerStyle: { backgroundColor: '#6200ee', borderBottomWidth: 0 },
              // cardStyle: { backgroundColor: '#6200ee', borderTopWidth: 0 },
              headerTintColor: 'white',
            }}
            name="CreateProfile-Type"
            component={CreateProfileType}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <OnBoarding /> */}
    </PaperProvider>
  );
});
