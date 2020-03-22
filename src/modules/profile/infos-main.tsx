import React, { memo } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { useProfileFlowStore } from '../../stores';
import { observer } from 'mobx-react-lite';

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

export const InfosMain = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      info =>
        (profileFlowStore.coords = [
          info.coords.longitude,
          info.coords.latitude,
        ])
    );
  };

  return (
    <View style={styles.container}>
      <Text bold={true} style={styles.title}>
        We need your infos
      </Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('profile-infos-name')}
      >
        {profileFlowStore.firstName && profileFlowStore.lastName ? '✓' : ''}{' '}
        Name
      </Button>

      <Button mode="contained" onPress={getGeolocation}>
        {profileFlowStore.coords ? '✓' : ''} Geolocation
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('profile-infos-phone')}
      >
        {profileFlowStore.phone && profileFlowStore.dialCode ? '✓' : ''} Phone
      </Button>

      {profileFlowStore.role === 'needer' && (
        <Button
          mode="contained"
          onPress={() => navigation.navigate('profile-infos-address')}
        >
          {profileFlowStore.address ? '✓' : ''} Address
        </Button>
      )}
    </View>
  );
});
