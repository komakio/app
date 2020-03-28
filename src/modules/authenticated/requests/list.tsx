import React, { useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { TabContainer } from '../common/tab-container';
import { Button } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';
import { EmptyBox } from '../common/empty-box';
import { ShareButton } from '../../../shared/button/share-button';
import { useUserStore, useRequestsStore } from '../../../stores';
import { observer } from 'mobx-react-lite';
import { RequestListItem } from './request-list-item';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  button: {
    marginVertical: 40,
  },
});

export const RequestsList = observer(() => {
  const navigation = useNavigation();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      requestsStore.getRequests();
    });
    return unsubscribe;
  }, [navigation, requestsStore]);

  const requestHelp = async () => {
    await requestsStore.createRequest();
  };

  const hasRequests = !!requestsStore.requests?.length;

  return (
    <TabContainer title={t('REQUESTS_TITLE')} flex={!hasRequests}>
      <View style={{ flex: 1, width: '100%' }}>
        {!hasRequests && <EmptyBox title={t('REQUESTS_EMPTY_DISCLAIMER')} />}
        {hasRequests &&
          requestsStore.requests?.map((request) => (
            <RequestListItem key={request._id} request={request} />
          ))}
      </View>

      {profile?.role === 'helper' && (
        <ShareButton style={styles.button} url="https://komak.io" />
      )}
      {profile?.role === 'needer' &&
        requestsStore?.requests?.filter((r) => r.status === 'pending')
          .length === 0 && (
          <Button size="big" style={styles.button} onPress={requestHelp}>
            {t('REQUESTS_REQUEST_HELP')}
          </Button>
        )}
    </TabContainer>
  );
});
