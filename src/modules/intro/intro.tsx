import React, { memo, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Text } from '@shared/text';
import { Button } from '@shared/button';
import { useUserStore } from '@stores';
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
  const { t } = useTranslation();

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
  }, [navigation, userStore]);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.title} bold={true}>
          {t('INTRO_TITLE')}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            size="big"
            onPress={() => navigation.navigate('login-signup')}
          >
            {t('INTRO_GET_STARTED')}
          </Button>
        </View>
      </View>
    </View>
  );
});
