import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { ProfileFlowStore } from '../../stores/profile-flow-store';
import { useProfileFlowStore } from '../../stores';
import { Button } from '../../shared/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export const ProfileType = memo(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();

  const changeStatus = (role: ProfileFlowStore['role']) => () => {
    profileFlowStore.role = role;
    navigation.navigate('profile-infos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        What is you status ?
      </Text>

      <Button onPress={changeStatus('helper')}>Healthy</Button>
      <Button onPress={changeStatus('needer')}>Sick</Button>
    </View>
  );
});
