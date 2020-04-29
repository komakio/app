import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@shared/text';
import { TextInput } from '@shared/text-input';
import { useProfileFlowStore, useUserStore } from '@stores';
import { Button } from '@shared/button';
import { ModalArrowClose } from '@shared/modal/modal-arrow-close';
import { useTranslation } from 'react-i18next';
import { COUNTRIES_DIAL_CODES } from '@utils/countries';
import { PickerSelect } from '@shared/picker-select/picker-select';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export const ProfileInfosPhone = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const userStore = useUserStore();
  const { t } = useTranslation();

  const [dialCode, setDialCode] = useState<string>(
    userStore?.profile?.phone?.dialCode || profileFlowStore.dialCode || ''
  );
  const [phone, setPhone] = useState<string>(
    userStore?.profile?.phone?.number || profileFlowStore.phone || ''
  );

  const onPress = () => {
    if (userStore.profile?._id) {
      userStore.patchProfile(userStore.profile._id, {
        phone: {
          number: phone,
          dialCode,
        },
      });
    } else {
      profileFlowStore.phone = phone;
      profileFlowStore.dialCode = dialCode;
    }

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>{t('PROFILE_PHONE_TITLE')}</Text>
      </View>

      <PickerSelect
        value={dialCode}
        label={t('PROFILE_PHONE_DIALCODE')}
        placeholder={{
          label: t('PROFILE_PHONE_DIALCODE_PLACEHOLDER'),
          value: null,
        }}
        doneText={t('ACTIONS_DONE')}
        onValueChange={setDialCode}
        items={COUNTRIES_DIAL_CODES.map((l) => ({
          label: `${l.name} (${l.dialCode})`,
          value: l.dialCode,
        }))}
      />

      <TextInput
        label={t('PROFILE_PHONE_PHONE')}
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
      />

      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>{t('ACTIONS_DONE')}</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
