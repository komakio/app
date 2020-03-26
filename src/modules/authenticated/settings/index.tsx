import React, { memo } from 'react';
import { SettingRouter } from './setting-router';

export const AuthenticatedSettings = memo(() => {
  // const navigation = useNavigation();
  // const userStore = useUserStore();

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
