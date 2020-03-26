import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { Button, CheckBoxButton } from '../../../shared/button';
import { useUserStore, useProfileFlowStore } from '../../../stores';
import { TabContainer } from '../common/tab-container';
import { InfosRouter } from '../../profile/infos-router';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileInfosPhone } from '../../profile/infos/phone';
import { ProfileInfosAddress } from '../../profile/infos/address';
import { SettingRouter } from './setting-router';
import { colors } from '../../../shared/variables/colors';
import { Theme } from '../../../shared/variables/theme';

export const AuthenticatedSettings = memo(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const profileFlowStore = useProfileFlowStore();

  return (
    // <TabContainer title="Profile">
    //   <Button
    //     theme="grey"
    //     style={{ marginTop: 80 }}
    //     onPress={async () => {
    //       await userStore.logout();
    //       navigation.dispatch(
    //         CommonActions.reset({
    //           index: 0,
    //           routes: [{ name: 'intro' }],
    //         })
    //       );
    //     }}
    //   >
    //     Logout
    //   </Button>
    <SettingRouter />
    // </TabContainer>
  );
});
