import React, { memo, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { Button } from '../../shared/button';
import { useUserStore } from '../../stores';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 64,
  },
});

export const Intro = memo(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();

  useEffect(() => {
    const isLoggedIn = async () => {
      await userStore.waitReady();
      if (userStore.profiles.length) {
        navigation.dispatch(StackActions.replace('authenticated'));
      } else if (userStore.user) {
        navigation.navigate('profile-type');
      }
    };
    isLoggedIn();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        Thank you for making an impact
      </Text>
      <View style={styles.buttonContainer}>
        <Button size="big" onPress={() => navigation.navigate('login-signup')}>
          Get started
        </Button>
      </View>
    </View>
  );
});
