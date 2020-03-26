import React from 'react';;

import { StyleSheet } from 'react-native';
import { TabContainer } from '../common/tab-container';
import { Button } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';
import { EmptyBox } from '../common/empty-box';
import { ShareButton } from '../../../shared/button/share-button';
import { useUserStore } from '../../../stores';
import { observer } from 'mobx-react-lite';

const styles = StyleSheet.create({
  button: {
    marginVertical: 40,
  },
});

export const AuthenticatedRequests = observer(() => {
  const navigation = useNavigation();
  const { profile } = useUserStore();

  const requestHelp = () => {};

  return (
    <TabContainer title="Requests" flex>
      <EmptyBox title="The more healthy helpers the better. Add your friends and help out." />
      {profile?.role === 'helper' && (
        <ShareButton style={styles.button} url="https://komak.io" />
      )}
      {profile?.role === 'needer' && (
        <Button size="big" style={styles.button} onPress={requestHelp}>
          Request help
        </Button>
      )}
    </TabContainer>
  );
});
