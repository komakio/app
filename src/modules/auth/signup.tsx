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
  const [error, setError] = useState('');

  const onCompletePassword = (password: string, onFail: () => void) => {
    setError(null);
    setTimeout(() => {
      if (password === '1234') {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'authenticated' }],
          })
        );
      } else {
        setError('Wrong password');
        onFail();
      }
    }, 1000);
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
