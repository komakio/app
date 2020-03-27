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
    paddingHorizontal: 20,
    lineHeight: 40,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export const ProfileInfosName = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>Please enter your first and last name</Text>
      </View>

      <TextInput
        label="First Name"
        value={profileFlowStore.firstName}
        onChangeText={(firstName) => (profileFlowStore.firstName = firstName)}
        autoCorrect={false}
        placeholder="John"
        // placeholderTextColor={colors.blue}
      />

      <TextInput
        label="Last Name"
        value={profileFlowStore.lastName}
        onChangeText={(lastName) => (profileFlowStore.lastName = lastName)}
        autoCorrect={false}
        placeholder="Doe"
        // placeholderTextColor={colors.blue}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={navigation.goBack}>Done</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
