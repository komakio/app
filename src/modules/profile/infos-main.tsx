import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { useProfileFlowStore } from '../../stores';
import { Geolocation } from '../../utils/geolocation';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
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

export const InfosMain = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const { t } = useTranslation();

  const getGeolocation = async () => {
    try {
      const infos = await Geolocation.get();
      profileFlowStore.coords = [infos.coords.longitude, infos.coords.latitude];
    } catch (error) {
      Alert.alert('Location', t(error));
    }
  };

  return (
    <View style={styles.container}>
      <Text bold={true} style={styles.title}>
        We need your infos
      </Text>

      <Button onPress={() => navigation.navigate('profile-infos-name')}>
        {profileFlowStore.firstName && profileFlowStore.lastName ? '✓' : ''}{' '}
        Name
      </Button>

      <Button onPress={getGeolocation}>
        {profileFlowStore.coords ? '✓' : ''} Geolocation
      </Button>

      <Button onPress={() => navigation.navigate('profile-infos-phone')}>
        {profileFlowStore.phone && profileFlowStore.dialCode ? '✓' : ''} Phone
      </Button>

      {profileFlowStore.role === 'needer' && (
        <Button onPress={() => navigation.navigate('profile-infos-address')}>
          {profileFlowStore.address ? '✓' : ''} Address
        </Button>
      )}

      {profileFlowStore.isValid() && (
        <Button onPress={() => navigation.navigate('signup')}>GO</Button>
      )}
    </View>
  );
});
