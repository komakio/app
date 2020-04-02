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
import { useTranslation } from 'react-i18next';

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
  const userStore = useUserStore();
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState<Profile['firstName']>(
    userStore?.profile?.firstName || profileFlowStore.firstName || ''
  );
  const [lastName, setLastName] = useState<Profile['lastName']>(
    userStore?.profile?.lastName || profileFlowStore.lastName || ''
  );

  const onPress = () => {
    if (userStore.profile?._id) {
      userStore.patchProfile(userStore.profile._id, {
        firstName,
        lastName,
      });
    } else {
      profileFlowStore.firstName = firstName;
      profileFlowStore.lastName = lastName;
    }
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>{t('PROFILE_NAME_TITLE')}</Text>
      </View>

      <TextInput
        label={t('PROFILE_NAME_FIRSTNAME')}
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCorrect={false}
        // placeholderTextColor={colors.blue}
      />

      <TextInput
        label={t('PROFILE_NAME_LASTNAME')}
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        autoCorrect={false}
        // placeholderTextColor={colors.blue}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>{t('ACTIONS_DONE')}</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
