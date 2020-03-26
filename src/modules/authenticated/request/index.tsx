import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { TextInput } from '../../../shared/text-input';
import {
  useProfileFlowStore,
  useUserStore,
  useRequestsStore,
} from '../../../stores';
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

export const RequestView = observer(() => {
  const navigation = useNavigation();
  const { params: request } = useRoute<
    RouteProp<{ request: Request }, 'request'>
  >();
  const profileFlowStore = useProfileFlowStore();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();

  const title =
    profile.role === 'needer'
      ? 'You have requested some help'
      : `${request.requesterProfileId} has requested some help`;

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
        </View>
      )}

      {profile.role === 'helper' && (
        <View>
          <View style={styles.buttonContainer}>
            <Button onPress={navigation.goBack}>Accept</Button>
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
