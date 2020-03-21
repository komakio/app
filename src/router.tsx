import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileType } from './modules/profile/type';
import { ProfileTypeTwo } from './modules/profile/type2';
import { RouterAnimations } from './utils/router-animations';
import { Intro } from './modules/intro/intro';

const Stack = createStackNavigator();

export const Router = memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...RouterAnimations.stackLeftRightFull,
          cardStyle: {
            backgroundColor: 'transparent',
          },
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
        }}
      >
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="profile-type" component={ProfileType} />
        <Stack.Screen name="profile-type2" component={ProfileTypeTwo} />
        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
