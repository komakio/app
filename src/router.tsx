import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
// import { OnBoarding } from '../_old/on-boarding/page';
// import { Login } from '../_old/auth/login';
// import { CreateProfileType } from '../_old/create/type';
// import { CreateProfileInfo } from '../_old/create/infos';
// import { MapTest } from '../_old/map';
import { ProfileType } from './modules/profile/type';
import { ProfileTypeTwo } from './modules/profile/type2';
import { TransitionIOSSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

const Stack = createStackNavigator();

const forFade = ({ current, closing }) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const Router = memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // mode="modal"
        screenOptions={{
          headerShown: false,
          // headerMode: 'none',
          // transparentCard: true,
          // transitionSpec: {
          //   open: () => StackViewTransitionConfigs.SlideFromRightIOS
          // }
          // This removes the background from the card
          // See https://github.com/react-navigation/react-navigation/issues/2713
          // transitionConfig: () => ({
          //   containerStyleLight: {},
          //   containerStyleDark: {},
          //   screenInterpolator: props => {
          //     const { layout, position, scene } = props;
          //     const { initWidth } = layout;
          //     const { index } = scene;

          //     const translateX = position.interpolate({
          //       inputRange: [index - 1, index, index + 1],
          //       outputRange: [initWidth, 0, -initWidth],
          //     });

          //     return {
          //       transform: [{ translateX }],
          //     };
          //   },
          // }),

          // transparentCard requires cardStyle+opacity for android
          // See https://github.com/react-navigation/react-navigation/issues/5523
          cardStyle: {
            // opacity: 1.0,
            backgroundColor: 'transparent',
          },
          // cardShadowEnabled: false,
          // cardOverlay: false,

          // gestureDirection: 'horizontal',
          // animationTypeForReplace: ''
          // transitionSpec: {
          //   open: TransitionSpecs.ScaleFromCenterAndroidSpec,
          //   close: TransitionSpecs.ScaleFromCenterAndroidSpec,
          // },
          // trans
          cardStyleInterpolator: forFade,
          // cardStyle: { backgroundColor: 'green' },
          // cardOverlayEnabled: false,
          // cardOverlayEnabled: false,
          // cardStyle: { backgroundColor: 'white' },
          // headerStyle: { backgroundColor: theme.colors.primary },
        }}
      >
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
