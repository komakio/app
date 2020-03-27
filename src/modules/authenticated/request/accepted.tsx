import React, { useEffect, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { useUserStore, useRequestsStore } from '../../../stores';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';
import { Button } from '../../../shared/button';
import { Request } from '../../../models/request';
import { Profile } from '../../../models/profile';

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
  }
});

export const AcceptedRequestView = observer(() => {
  const navigation = useNavigation();
  const { params: request } = useRoute<
    RouteProp<{ request: Request }, 'request'>
  >();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();
  const [otherPersonProfile, setOtherPersonProfile] = useState<Profile>();

  useEffect(() => {
    const get = async () => {
      const data = await requestsStore.getProfileFromRequest(
        request._id,
        profile.role === 'needer'
          ? request.acceptorProfileId
          : request.requesterProfileId
      );
      setOtherPersonProfile(data);
    };
    get();
  }, [request, profile, requestsStore]);

  //   const title =
  //     profile.role === 'needer'
  //       ? 'You have requested some help'
  //       : `${request.requesterShortName} has requested some help`;
  const title =
    profile.role === 'needer'
      ? 'Help will be provided by a local in your community'
      : 'Help is needed by a local in your community.';

  if (!otherPersonProfile) {
    return;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <ScrollView>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.fieldTitle}>Name</Text>
        <Text style={styles.fieldValue}>
          {otherPersonProfile.firstName} {otherPersonProfile.lastName}
        </Text>


        {otherPersonProfile.address?.raw && <Text style={styles.fieldTitle}>Address</Text>}
        {otherPersonProfile.address?.raw && <Text style={styles.fieldValue}>{otherPersonProfile.address?.raw}</Text>}

        <Text style={styles.fieldTitle}>Phone number</Text>
        <Text style={styles.fieldValue}>{otherPersonProfile.phone.number}</Text>

          <Button
            style={styles.telButton}
            onPress={() => Linking.openURL(`tel:${otherPersonProfile.phone.number}`)}
          >
            Call
          </Button>
          <Button
          style={styles.smsButton}
            onPress={() => Linking.openURL(`sms:tel:${otherPersonProfile.phone.number}`)}
          >
            SMS
          </Button>
      </ScrollView>

    </KeyboardAvoidingView>
  );
});
