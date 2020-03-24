import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileType } from './modules/profile/type';
import { RouterAnimations } from './utils/router-animations';
import { Intro } from './modules/intro/intro';
import { InfosRouter } from './modules/profile/infos-router';
import { Signup } from './modules/auth/signup';
import { Authenticated } from './modules/authenticated/authenticated';
import { Consents } from './modules/consents/consents';
import { Infographic } from './modules/infographic/infographic';

const Stack = createStackNavigator();

export const Router = memo(() => {
  return (
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
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="profile-infos" component={InfosRouter} />
      <Stack.Screen name="consents" component={Consents} />
      {/* <Stack.Screen name="infographic" component={Infographic} /> */}
      <Stack.Screen name="authenticated" component={Authenticated} />
    </Stack.Navigator>
  );
});
