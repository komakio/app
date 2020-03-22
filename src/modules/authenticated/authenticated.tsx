import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AuthenticatedRequests } from './requests';
import { AuthenticatedSponsors } from './sponsors';
import { AuthenticatedSettings } from './settings';
import { Platform } from 'react-native';
import { IconWithBadge } from './icon-with-badge';

const Tab = createBottomTabNavigator();
const AndroidTab = createMaterialBottomTabNavigator();

const ACTIVE_TAB_COLOR = 'tomato';
const INACTIVE_TAB_COLOR = 'grey';

const screens = [
  {
    name: 'authenticated-requests',
    component: AuthenticatedRequests,
    title: 'Requests',
    icon: 'clipboard-text-outline',
    iconActive: 'clipboard-text',
    withBadge: true,
  },

  {
    name: 'authenticated-sponsors',
    component: AuthenticatedSponsors,
    title: 'Sponsors',
    icon: 'charity',
    iconActive: 'charity',
  },
  {
    name: 'authenticated-settings',
    component: AuthenticatedSettings,
    title: 'Settings',
    icon: 'account-circle-outline',
    iconActive: 'account-circle',
  },
];

export const Authenticated = memo(() => {
  //   const navigation = useNavigation();
  const activeRequests = 3;

  if (Platform.OS === 'android') {
    return (
      <AndroidTab.Navigator
        activeColor={ACTIVE_TAB_COLOR}
        inactiveColor={INACTIVE_TAB_COLOR}
        barStyle={{ backgroundColor: 'white' }}
      >
        {screens.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              title: screen.title,
              tabBarIcon: ({ color, focused }) => (
                <Icon
                  name={focused ? screen.iconActive : screen.icon}
                  color={color}
                  size={26}
                />
              ),
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              tabBarBadge: screen.withBadge ? activeRequests : null,
            }}
          />
        ))}
      </AndroidTab.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const screen = screens.find(screen => screen.name === route.name);

          return (
            <IconWithBadge
              badgeCount={route.name === 'authenticated-requests' ? 3 : 0}
              name={focused ? screen.iconActive : screen.icon}
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
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ title: screen.title }}
        />
      ))}
    </Tab.Navigator>
  );
});
