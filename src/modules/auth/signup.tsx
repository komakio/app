import React, { memo, useState } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
// import { ActionButton } from './action-button';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { Password } from './passcode/password';
import { Text } from '../../shared/text';
import { UsersApi } from '../../api/user';
import { storage, Storage } from '../../utils/storage';
import { useUserStore } from '../../stores';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#6200ee',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 50,
  },
});

export const Signup = memo(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const [error, setError] = useState('');

  const onCompletePassword = async (password: string, onFail: () => void) => {
    setError(null);

    try {
      await userStore.signup(password);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'authenticated' }],
        })
      );
    } catch (e) {
      setError('This device is already registered with another password.');
      console.log(e);
    }

    onFail();
    // setTimeout(() => {
    //   if (password === '1234') {

    //   } else {
    //     setError('Wrong password');
    //     onFail();
    //   }
    // }, 1000);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text style={styles.title} bold={true}>
        Create a password
      </Text>
      <Text style={styles.subtitle}>Something clever can be said here</Text>
      <Password onCompletePassword={onCompletePassword} />
      {!!error && <Text style={styles.subtitle}>{error}</Text>}
    </KeyboardAvoidingView>
  );
});
