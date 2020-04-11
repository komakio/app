import React, { memo, FC } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useUserStore, useRequestsStore } from '@stores';
import { Button } from '@shared/button';
import { Request } from '@models/request';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonMargin: {
    marginLeft: 10,
  },
  buttonFlex: {
    flex: 1,
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
    const navigation = useNavigation();

    const acceptRequest = async () => {
      await requestsStore.acceptRequest(request._id);
    };

    const refuseRequest = async () => {
      requestsStore.refuseRequest(request._id);
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
        {request.status === 'accepted' && (
          <View style={styles.buttonContainer}>
            <View style={styles.buttonFlex} />
            <Button
              style={styles.buttonFlex}
              onPress={() =>
                navigation.navigate('requests-request-accepted', request)
              }
              size="small"
            >
              {t('ACTIONS_OPEN')}
            </Button>
          </View>
        )}
        {request.requesterProfileId === profile?._id &&
          request.status === 'pending' && (
            <View style={styles.buttonContainer}>
              <Button
                onPress={cancelRequest}
                theme="blue"
                style={styles.buttonFlex}
                size="small"
              >
                {t('ACTIONS_CANCEL')}
              </Button>
              <View style={styles.buttonFlex} />
            </View>
          )}
        {request.requesterProfileId !== profile?._id &&
          request.status === 'pending' && (
            <View style={styles.buttonContainer}>
              <Button
                size="small"
                theme="red"
                onPress={refuseRequest}
                style={styles.buttonFlex}
              >
                {t('ACTIONS_REFUSE')}
              </Button>
              <Button
                size="small"
                onPress={acceptRequest}
                style={[styles.buttonFlex, styles.buttonMargin]}
              >
                {t('ACTIONS_ACCEPT')}
              </Button>
            </View>
          )}
      </View>
    );
  }
);
