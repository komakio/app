import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { TextInput } from '../../../shared/text-input';
import { useProfileFlowStore, useUserStore } from '../../../stores';
import { Button } from '../../../shared/button';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const [phone, setPhone] = useState<string>(
    userStore?.profile?.phone?.number || ''
  );

  const onPress = () => {
    if (userStore.profile?._id) {
      userStore.patchProfile(userStore.profile._id, {
        phone: {
          number: phone,
        },
      });
    } else {
      profileFlowStore.phone = phone;
    }

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>{t('PROFILE_PHONE_TITLE')}</Text>
      </View>

      <TextInput
        label={t('PROFILE_PHONE_PHONE')}
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        keyboardType="number-pad"
      />

      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>{t('ACTIONS_DONE')}</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
