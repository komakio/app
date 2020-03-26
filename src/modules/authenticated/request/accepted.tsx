import React, { useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Linking } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { useUserStore, useRequestsStore } from '../../../stores';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';
import { Button } from '../../../shared/button';
import { Request } from '../../../models/request';

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
  buttonsContainer: {
    flexDirection: 'row',
  },
  telButton: {
    marginRight: 10,
  },
});

export const AcceptedRequestView = observer(() => {
  const navigation = useNavigation();
  const { params: request } = useRoute<
    RouteProp<{ request: Request }, 'request'>
  >();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();

  useEffect(() => {
    const get = async () => {
      const data = await requestsStore.getProfileFromRequest(
        request._id,
        profile.role === 'needer'
          ? request.acceptorProfileId
          : request.requesterProfileId
      );
      console.log(data);
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

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.fieldTitle}>Name</Text>
      <Text style={styles.fieldValue}>Theo Mathieu</Text>

      <Text style={styles.fieldTitle}>Address</Text>
      <Text style={styles.fieldValue}>Ved andebakken 10</Text>

      <Text style={styles.fieldTitle}>Phone number</Text>
      <Text style={styles.fieldValue}>50347224</Text>

      <View style={styles.buttonsContainer}>
        <Button
          style={styles.telButton}
          onPress={() => Linking.openURL('tel:+50397224')}
        >
          Call
        </Button>
        <Button onPress={() => Linking.openURL('sms:+50397224')}>SMS</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
