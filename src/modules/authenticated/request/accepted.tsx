import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Linking,
  ScrollView,
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Text } from '@shared/text';
import { useUserStore, useRequestsStore } from '@stores';
import { ModalArrowClose } from '@shared/modal/modal-arrow-close';
import { Button } from '@shared/button';
import { Request } from '@models/request';
import { Profile } from '@models/profile';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  fieldTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  fieldValue: {
    fontSize: 20,
    marginBottom: 30,
  },
  telButton: {
    marginBottom: 10,
  },
  smsButton: {
    marginBottom: 20,
  },
});

export const AcceptedRequestView = observer(() => {
  const { params: request } = useRoute<
    RouteProp<{ request: Request }, 'request'>
  >();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();
  const [otherPersonProfile, setOtherPersonProfile] = useState<Profile>();
  const { t } = useTranslation();

  useEffect(() => {
    const get = async () => {
      const data = await requestsStore.getProfileFromRequest(
        request._id,
        request.acceptorProfileId === profile?._id
          ? request.requesterProfileId
          : request.acceptorProfileId
      );
      setOtherPersonProfile(data);
    };
    get();
  }, [request, profile, requestsStore]);

  //   const title =
  //     profile?.role === 'needer'
  //       ? 'You have requested some help'
  //       : `${request.requesterShortName} has requested some help`;
  const title =
    request.acceptorProfileId === profile?._id
      ? t('REQUESTS_REQUEST_ACCEPTED_TITLE_HELPER', {
          name: request.requesterShortName,
        })
      : t('REQUESTS_REQUEST_ACCEPTED_TITLE_NEEDER', {
          name: request.acceptorShortName,
        });

  if (!otherPersonProfile) {
    return;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <ScrollView>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.fieldTitle}>{t('REQUESTS_REQUEST_NAME')}</Text>
        <Text style={styles.fieldValue}>
          {otherPersonProfile.firstName} {otherPersonProfile.lastName}
        </Text>

        {otherPersonProfile.address?.raw ? (
          <Text style={styles.fieldTitle}>{t('REQUESTS_REQUEST_ADDRESS')}</Text>
        ) : null}
        {otherPersonProfile.address?.raw ? (
          <Text style={styles.fieldValue}>
            {otherPersonProfile.address?.raw}
          </Text>
        ) : null}

        <Text style={styles.fieldTitle}>
          {t('REQUESTS_REQUEST_PHONE_NUMBER')}
        </Text>
        <Text style={styles.fieldValue}>
          {otherPersonProfile.phone?.number}
        </Text>

        <Button
          style={styles.telButton}
          onPress={() =>
            Linking.openURL(`tel:${otherPersonProfile.phone?.number}`)
          }
        >
          {t('ACTIONS_CALL')}
        </Button>
        <Button
          style={styles.smsButton}
          onPress={() =>
            Linking.openURL(`sms:tel:${otherPersonProfile.phone?.number}`)
          }
        >
          {t('ACTIONS_SMS')}
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});
