import React, { memo } from 'react';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { Button } from '../../../shared/button';
import { useUserStore } from '../../../stores';
import { TabContainer } from '../common/tab-container';

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
