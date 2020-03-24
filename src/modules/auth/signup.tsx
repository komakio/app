import React, { memo, useState, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppleButton } from '@invertase/react-native-apple-authentication';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../../shared/text';
import { useUserStore } from '../../stores';
import { Touchable } from '../../shared/button';
import { colors } from '../../shared/variables/colors';
import { observer } from 'mobx-react-lite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  googleButton: {
    width: 250,
    height: 60,
    margin: 10,
    borderRadius: 5,
    backgroundColor: colors.red400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontVariant: ['lining-nums'],
  },
  appleButton: {
    width: 250,
    height: 60,
    margin: 10,
  },
});

export const Signup = observer(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();

  useEffect(() => {
    if (userStore.user) {
      navigation.navigate('profile-infos');
    }
  }, [userStore.user, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        Please sign up with your favorite social login
      </Text>
      <Touchable
        onPress={() => userStore.socialSignup('google')}
        containerStyle={styles.googleButton}
        textStyle={styles.googleText}
      >
        <Icon name="google" size={20} color="white" /> Sign in with Google
      </Touchable>
      <AppleButton
        style={styles.appleButton}
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => userStore.socialSignup('apple')}
      />
    </View>
  );
});
