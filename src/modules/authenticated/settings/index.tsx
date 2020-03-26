import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { Button } from '../../../shared/button';
import { useUserStore } from '../../../stores';
import { TabContainer } from '../common/tab-container';

const styles = StyleSheet.create({});

export const AuthenticatedSettings = memo(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();

  return (
    <TabContainer title="Settings" flex>
      <Button
        theme="grey"
        style={{ marginTop: 80 }}
        onPress={async () => {
          await userStore.logout();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'intro' }],
            })
          );
        }}
      >
        Logout
      </Button>
    </TabContainer>
  );
});
