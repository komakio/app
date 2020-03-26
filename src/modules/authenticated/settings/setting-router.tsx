import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileInfosName } from '../../profile/infos/name';
import { ProfileInfosPhone } from '../../profile/infos/phone';
import { colors } from '../../../shared/variables/colors';
import { Theme } from '../../../shared/variables/theme';
import { settingProfileInfo } from './setting-info';

const Stack = createStackNavigator();

const modalOptions = {
  cardStyle: {
    backgroundColor: colors.grey100,
    borderTopLeftRadius: Theme.borderRadius,
    borderTopRightRadius: Theme.borderRadius,
  },
};

export const SettingRouter = memo(() => {
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
      <Stack.Screen name="setting" component={settingProfileInfo} />
      <Stack.Screen
        name="setting-profile-name"
        component={ProfileInfosName}
        options={modalOptions}
      />
      <Stack.Screen
        name="setting-profile-phone"
        component={ProfileInfosPhone}
        options={modalOptions}
      />
    </Stack.Navigator>
  );
});
