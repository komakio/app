import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InfosMain } from './infos-main';
import { ProfileInfosName } from './infos/name';
import { Theme } from '../../shared/variables/theme';
import { ProfileInfosPhone } from './infos/phone';
import { ProfileInfosAddress } from './infos/address';
import { colors } from '../../shared/variables/colors';

const Stack = createStackNavigator();

const modalOptions = {
  cardStyle: {
    backgroundColor: colors.gray,
    borderTopLeftRadius: Theme.borderRadius,
    borderTopRightRadius: Theme.borderRadius,
  },
};

export const InfosRouter = memo(() => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
        },
        cardOverlayEnabled: false,
      }}
    >
      <Stack.Screen name="profile-main" component={InfosMain} />
      <Stack.Screen
        name="profile-infos-name"
        component={ProfileInfosName}
        options={modalOptions}
      />
      <Stack.Screen
        name="profile-infos-phone"
        component={ProfileInfosPhone}
        options={modalOptions}
      />
      <Stack.Screen
        name="profile-infos-address"
        component={ProfileInfosAddress}
        options={modalOptions}
      />
    </Stack.Navigator>
  );
});
