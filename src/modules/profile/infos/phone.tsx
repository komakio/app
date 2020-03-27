import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { TextInput } from '../../../shared/text-input';
import { useProfileFlowStore } from '../../../stores';
import { Button } from '../../../shared/button';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export const ProfileInfosPhone = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>Please enter your phone number</Text>
      </View>

      <TextInput
        label="Phone"
        value={profileFlowStore.phone}
        onChangeText={(phone) => (profileFlowStore.phone = phone)}
        keyboardType="number-pad"
      />

      <View style={styles.buttonContainer}>
        <Button onPress={navigation.goBack}>Done</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
