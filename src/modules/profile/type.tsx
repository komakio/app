import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { ProfileFlowStore } from '../../stores/profile-flow-store';
import { useProfileFlowStore, useUserStore } from '../../stores';
import { Button } from '../../shared/button';
import { BottomNavbar } from '../nav-bar';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
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
  buttonsContainer: {
    marginTop: 40,
    marginBottom: 64,
  },
  lastButton: {
    marginTop: 10,
  },
});

export const ProfileType = memo(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const userStore = useUserStore();

  const { profile } = userStore;

  const changeStatus = (role: ProfileFlowStore['role']) => () => {
    if (profile?._id) {
      userStore.patchProfile(profile._id, {
        role,
      });
      navigation.goBack();
      return;
    }
    profileFlowStore.role = role;
    navigation.navigate('profile-infos');
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.title} bold={true}>
          {profile?.role ? 'Change your Status' : 'What is your status'}
        </Text>
        <View style={styles.buttonsContainer}>
          <Button theme="blue" size="big" onPress={changeStatus('helper')}>
            Healthy
          </Button>
          <Button
            style={styles.lastButton}
            theme="red"
            size="big"
            onPress={changeStatus('needer')}
          >
            In need
          </Button>
        </View>
      </View>
      {!profile?.role && (
        <BottomNavbar onBack={navigation.canGoBack() && navigation.goBack} />
      )}
    </View>
  );
});
