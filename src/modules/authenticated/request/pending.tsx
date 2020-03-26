import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export const PendingRequestView = observer(() => {
  const navigation = useNavigation();
  const { params: request } = useRoute<
    RouteProp<{ request: Request }, 'request'>
  >();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();

  const title =
    profile.role === 'needer'
      ? 'You have requested some help'
      : `${request.requesterShortName} has requested some help`;

  const acceptRequest = async () => {
    await requestsStore.acceptRequest(request._id);
    navigation.goBack();
  };

  const cancelRequest = async () => {
    await requestsStore.cancelRequest(request._id);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      {profile.role === 'needer' && (
        <View>
          <View style={styles.buttonContainer}>
            <Button onPress={navigation.goBack}>Ok</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={cancelRequest} theme="red">
              Cancel
            </Button>
          </View>
        </View>
      )}

      {profile.role === 'helper' && (
        <View>
          <View style={styles.buttonContainer}>
            <Button onPress={acceptRequest}>Accept</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={navigation.goBack} theme="red">
              Close
            </Button>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
});
