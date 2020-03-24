import React, { memo, useState } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
// import { ActionButton } from './action-button';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';

import { Password } from './passcode/password';
import { Text } from '../../shared/text';
import { UsersApi } from '../../api/user';
import { Storage } from '../../utils/storage';
import { useUserStore } from '../../stores';
import { Button } from '../../shared/button';
import { GoogleSigninButton } from '@react-native-community/google-signin';

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

  // const onCompletePassword = async (password: string, onFail: () => void) => {
  //   setError(null);

  //   try {
  //     await userStore.signup(password);
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 1,
  //         routes: [{ name: 'authenticated' }],
  //       })
  //     );
  //   } catch (e) {
  //     setError('This device is already registered with another password.');
  //     console.log(e);
  //   }

  //   onFail();
  //   // setTimeout(() => {
  //   //   if (password === '1234') {

  //   //   } else {
  //   //     setError('Wrong password');
  //   //     onFail();
  //   //   }
  //   // }, 1000);
  // };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 192, height: 48, backgroundColor: 'blue' }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => userStore.socialSignup('google')}
        // disabled={this.state.isSigninInProgress}
      />
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => userStore.socialSignup('apple')}
      />
      <Button onPress={() => userStore.socialSignup('apple')}>Yo</Button>
      <Text>qwdqw</Text>
    </View>
  );

  // return (
  //   <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
  //     <Text style={styles.title} bold={true}>
  //       Create a password
  //     </Text>
  //     <Text style={styles.subtitle}>Something clever can be said here</Text>
  //     <Password onCompletePassword={onCompletePassword} />
  //     {!!error && <Text style={styles.subtitle}>{error}</Text>}
  //   </KeyboardAvoidingView>
  // );
});
