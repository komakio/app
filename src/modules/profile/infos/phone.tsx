import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { TextInput } from '../../../shared/text-input';
import { useProfileFlowStore } from '../../../stores';
import { ModalArrowClose } from './modal-arrow-close';
import { Button } from '../../../shared/button';

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
        label="Phones"
        value={profileFlowStore.phone}
        onChangeText={phone => (profileFlowStore.phone = phone)}
        keyboardType="number-pad"
      />

      <Button onPress={navigation.goBack}>Done</Button>
    </KeyboardAvoidingView>
  );
});
