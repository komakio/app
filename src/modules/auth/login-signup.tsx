import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import appleAuth from '@invertase/react-native-apple-authentication';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '@shared/text';
import { useUserStore } from '@stores';
import { Button } from '@shared/button';
import { BottomNavbar } from '@modules/nav-bar';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonWithMarginBottom: {
    marginBottom: 10,
  },
});

export const LoginSignup = memo(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const { t } = useTranslation();

  const socialSignup = (
    socialMedia: 'google' | 'apple' | 'facebook'
  ) => async () => {
    const signupSuccess = await userStore.socialSignup(socialMedia);
    if (!signupSuccess) {
      return;
    }
    if (userStore.profiles.length) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'authenticated' }],
        })
      );
      return;
    }
    navigation.navigate('profile-type');
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.title} bold={true}>
          {t('SIGNIN_TITLE')}
        </Text>
        <Button
          style={styles.buttonWithMarginBottom}
          onPress={socialSignup('google')}
          theme="red"
        >
          <Icon name="google" size={25} color="white" />
          <Text style={styles.buttonText}>Google</Text>
        </Button>
        <Button
          style={styles.buttonWithMarginBottom}
          onPress={socialSignup('facebook')}
          theme="blue"
        >
          <Icon name="facebook" size={25} color="white" />
          <Text style={styles.buttonText}>Facebook</Text>
        </Button>
        {appleAuth.isSupported && (
          <Button onPress={socialSignup('apple')} theme="black">
            <Icon name="apple" size={25} color="white" />
            <Text style={styles.buttonText}>Apple</Text>
          </Button>
        )}
      </View>
      <BottomNavbar onBack={navigation.goBack} />
    </View>
  );
});
