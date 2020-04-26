import React, { useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { TabContainer } from '../common/tab-container';
import { Button } from '@shared/button';
import { useNavigation } from '@react-navigation/native';
import { EmptyBox } from '../common/empty-box';
import { useUserStore, useRequestsStore, useNotificationsStore } from '@stores';
import { observer } from 'mobx-react-lite';
import { RequestListItem } from './request-list-item';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
  },
});

export const RequestsList = observer(() => {
  const navigation = useNavigation();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();
  const notificationsStore = useNotificationsStore();
  const { t } = useTranslation();

  useEffect(() => {
    notificationsStore.showAllAsSeen();
  }, [notificationsStore]);

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
    <TabContainer title={t('REQUESTS_TITLE')} flex={true}>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={!hasRequests && { flex: 1 }}
      >
        {!hasRequests && (
          <EmptyBox
            title={
              profile?.role === 'needer'
                ? t('REQUESTS_EMPTY_DISCLAIMER_NEEDER')
                : t('REQUESTS_EMPTY_DISCLAIMER_HELPER')
            }
          />
        )}
        {hasRequests &&
          requestsStore.requests?.map((request) => (
            <RequestListItem key={request._id} request={request} />
          ))}
      </ScrollView>

      {profile?.role === 'needer' &&
        requestsStore?.requests?.filter((r) => r.status === 'pending')
          .length === 0 && (
          <View style={{ paddingTop: 30 }}>
            <Button size="big" style={styles.button} onPress={requestHelp}>
              {t('REQUESTS_REQUEST_HELP')}
            </Button>
          </View>
        )}
    </TabContainer>
  );
});
