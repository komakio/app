import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { TextInput } from '../../../shared/text-input';
import { useProfileFlowStore, useUserStore } from '../../../stores';
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
  const userStore = useUserStore();

  const [phone, SetPhone] = useState<string>(userStore?.profile?.phone.number || null);


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>Please enter your phone number</Text>
      </View>

      <TextInput
        label="Phone"
        value={phone}
        onChangeText={phone => SetPhone(phone)}
        keyboardType="number-pad"
      />

      <View style={styles.buttonContainer}>
        <Button
          onPress={async () => {
            if (userStore.profile._id) {
              await userStore.patchProfile(userStore.profile._id, {
                phone: {
                  number: phone,
                },
              });
            } else {
              profileFlowStore.phone = phone;
              navigation.goBack();
            }

            navigation.goBack();
          }}
        >
          Done
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
});
