import React, { memo, FC } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
import { useUserStore, useRequestsStore } from '../../../stores';
import { Button } from '../../../shared/button';
import { Request } from '../../../models/request';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

interface PendingRequestViewProps {
  request: Request;
}

export const RequestActions: FC<PendingRequestViewProps> = memo(
  ({ request }) => {
    const { profile } = useUserStore();
    const requestsStore = useRequestsStore();
    const { t } = useTranslation();

    const acceptRequest = async () => {
      await requestsStore.acceptRequest(request._id);
    };

    const cancelRequest = async () => {
      Alert.alert(
        t('REQUESTS_REQUEST_PENDING_CANCEL_CONFIRM_TITLE'),
        t('REQUESTS_REQUEST_PENDING_CANCEL_CONFIRM_SUBTITLE'),
        [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: async () => await requestsStore.cancelRequest(request._id),
          },
        ],
        { cancelable: true }
      );
    };

    return (
      <View>
        {request.requesterProfileId === profile?._id &&
          request.status === 'pending' && (
            <View style={styles.buttonContainer}>
              <Button onPress={cancelRequest} theme="blue" size="smaller">
                {t('ACTIONS_CANCEL')}
              </Button>
            </View>
          )}
        {request.requesterProfileId !== profile?._id &&
          request.status === 'pending' && (
            <View style={styles.buttonContainer}>
              <Button size="smaller" onPress={acceptRequest}>
                {t('ACTIONS_ACCEPT')}
              </Button>
            </View>
          )}
      </View>
    );
  }
);
