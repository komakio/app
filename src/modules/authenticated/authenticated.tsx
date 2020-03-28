import React, { memo, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AuthenticatedSponsors } from './sponsors';
import { Platform, StyleSheet } from 'react-native';
import { IconWithBadge } from './icon-with-badge';
import { useNotificationsStore } from '../../stores';
import { colors } from '../../shared/variables/colors';
import { RequestsList } from './requests/list';
import { AuthenticatedSettings } from './settings';

const Tab = createBottomTabNavigator();
const AndroidTab = createMaterialBottomTabNavigator();

const ACTIVE_TAB_COLOR = colors.green100;
const INACTIVE_TAB_COLOR = 'black';

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.grey200,
  },
  text: { fontSize: 14, fontFamily: 'Sen' },
});

const screens = [
  {
    name: 'authenticated-sponsors',
    component: AuthenticatedSponsors,
    title: 'Sponsors',
    icon: 'charity',
    iconActive: 'charity',
  },
  {
    name: 'authenticated-requests',
    component: RequestsList,
    title: 'Requests',
    icon: 'bullseye',
    iconActive: 'bullseye',
    withBadge: true,
  },
  {
    name: 'authenticated-settings',
    component: AuthenticatedSettings,
    title: 'Profile',
    icon: 'account-circle-outline',
    iconActive: 'account-circle',
  },
];

export const Authenticated = memo(() => {
  const notificationsStore = useNotificationsStore();
  const activeRequests = 0;

  useEffect(() => {
    notificationsStore.registerForNotifications();
  }, [notificationsStore]);

  if (Platform.OS === 'android') {
    return (
      <AndroidTab.Navigator
        activeColor={ACTIVE_TAB_COLOR}
        inactiveColor={INACTIVE_TAB_COLOR}
        barStyle={styles.bar}
        initialRouteName="authenticated-requests"
      >
        {screens.map((screen) => (
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
              tabBarBadge:
                screen.withBadge && activeRequests ? activeRequests : null,
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
          const screen = screens.find((s) => s.name === route.name);

          return (
            <IconWithBadge
              badgeCount={
                route.name === 'authenticated-requests' ? activeRequests : 0
              }
              name={focused ? screen.iconActive : screen.icon}
              size={size}
              color={color}
            />
          );
        },
      })}
      initialRouteName="authenticated-requests"
      tabBarOptions={{
        activeTintColor: ACTIVE_TAB_COLOR,
        inactiveTintColor: INACTIVE_TAB_COLOR,
        style: styles.bar,
        labelStyle: styles.text,
      }}
    >
      {screens.map((screen) => (
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
