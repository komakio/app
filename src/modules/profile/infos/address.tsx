import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { TextInput } from '../../../shared/text-input';
import { useProfileFlowStore, useUserStore } from '../../../stores';
import { Button } from '../../../shared/button';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';
import { Profile } from '../../../models/profile';

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

export const ProfileInfosAddress = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const userStore = useUserStore();

  const { profile } = userStore;
  const [rawAddress, setRawAddress] = useState<Profile['address']['raw']>(
    profile?.address?.raw || ''
  );

  const onPress = () => {
    if (userStore.profile._id) {
      userStore.patchProfile(userStore.profile._id, {
        address: {
          ...profile.address,
          raw: rawAddress,
        },
      });
    } else {
      profileFlowStore.address = rawAddress;
    }
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>
          {profile?.address?.raw
            ? 'Change your address'
            : 'Please enter your address'}
        </Text>
      </View>

      <TextInput
        label="Address"
        value={rawAddress}
        onChangeText={(rawAddress) => setRawAddress(rawAddress)}
        autoCorrect={false}
        multiline={true}
        style={{ height: 100 }}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>Done</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
