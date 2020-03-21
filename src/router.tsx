import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileType } from './modules/profile/type';
import { RouterAnimations } from './utils/router-animations';
import { Intro } from './modules/intro/intro';
import { InfosRouter } from './modules/profile/infos-router';

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
          cardOverlayEnabled: false,
        }}
      >
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="profile-type" component={ProfileType} />
        <Stack.Screen name="profile-infos" component={InfosRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
