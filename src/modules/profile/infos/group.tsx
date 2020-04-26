import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@shared/text';
import { useUserStore } from '@stores';
import { Button } from '@shared/button';
import { ModalArrowClose } from '@shared/modal/modal-arrow-close';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import { colors } from '@shared/variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  commonInput: {
    marginVertical: 40,
    backgroundColor: 'white',
    height: 60,
    fontSize: 35,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.grey400,
    borderRadius: 5,
    color: colors.grey400,
  },
  textInput: { width: 100 },
  numberInput: { marginLeft: 5, flex: 1 },
});

export const ProfileInfosGroup = observer(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const { t } = useTranslation();
  const groupNumberRef = useRef<TextInput>();
  const textNumberRef = useRef<TextInput>();

  const [groupId, setGroupId] = useState<string>();
  const [groupNumber, setGroupNumber] = useState<string>();
  const onBack = () => {
    navigation.goBack();
  };

  const onSubmit = async (value: string) => {
    try {
      await userStore.addVolunteerGroup(userStore.profile._id, value);
    } catch (e) {
      Alert.alert(t('PROFILE_GROUP_ERROR'));
      const axiosError = e as AxiosError;
      if (axiosError.isAxiosError && axiosError.response.status === 403) {
        return;
      }
      throw e;
    }

    navigation.goBack();
  };

  const onChangeGroupId = (value: string) => {
    if (value.length <= 3) {
      setGroupId(value?.toUpperCase());
    }
    if (value.length === 3) {
      groupNumberRef.current.focus();
    }
  };
  const onChangeGroupNumber = (value: string) => {
    if (value.length <= 8) {
      setGroupNumber(value?.toUpperCase());
    }
    if (value.length === 8) {
      onSubmit(`${groupId}-${value}`);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      textNumberRef.current?.focus();
    }, 250);
  }, [textNumberRef]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>{t('PROFILE_GROUP_TITLE')}</Text>
      </View>

      <View style={styles.inputsContainer}>
        <TextInput
          value={groupId}
          onChangeText={onChangeGroupId}
          autoCorrect={false}
          autoFocus={true}
          ref={textNumberRef}
          style={[styles.commonInput, styles.textInput]}
          placeholder="ABC"
          placeholderTextColor={colors.grey300}
        ></TextInput>
        <TextInput
          ref={groupNumberRef}
          value={groupNumber}
          onChangeText={onChangeGroupNumber}
          keyboardType="number-pad"
          style={[styles.commonInput, styles.numberInput]}
          placeholder="123456"
          placeholderTextColor={colors.grey300}
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onBack}>{t('ACTIONS_BACK')}</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
