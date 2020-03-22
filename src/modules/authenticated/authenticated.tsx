import React, { memo } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthenticatedRequests } from './requests';
import { AuthenticatedSponsors } from './sponsors';
import { AuthenticatedSettings } from './settings';
import { Platform } from 'react-native';
import { IconWithBadge } from './icon-with-badge';

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createBottomTabNavigator();

const ACTIVE_TAB_COLOR = 'tomato';
const INACTIVE_TAB_COLOR = 'grey';

export const Authenticated = memo(() => {
  //   const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'authenticated-settings') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          } else if (route.name === 'authenticated-requests') {
            iconName = focused ? 'clipboard-text' : 'clipboard-text-outline';
          } else if (route.name === 'authenticated-sponsor') {
            iconName = 'charity';
          }

          return (
            <IconWithBadge
              badgeCount={route.name === 'authenticated-requests' ? 3 : 0}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: ACTIVE_TAB_COLOR,
        inactiveTintColor: INACTIVE_TAB_COLOR,
      }}
    >
      <Tab.Screen
        name="authenticated-requests"
        component={AuthenticatedRequests}
        options={{ title: 'Requests' }}
      />
      <Tab.Screen
        name="authenticated-sponsor"
        component={AuthenticatedSponsors}
        options={{ title: 'Sponsors' }}
      />
      <Tab.Screen
        name="authenticated-settings"
        component={AuthenticatedSettings}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
});
