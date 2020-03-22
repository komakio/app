import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { useProfileFlowStore } from '../../stores';
import { Geolocation } from '../../utils/geolocation';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Button } from '../../shared/button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ApprovedIcon } from '../../shared/approved-icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 22,
    paddingTop: 22,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 22,
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 10,
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
        Thank you for helping your local community.
      </Text>

      <Text style={styles.description}>
        We just need two things to set you up.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          theme="gray"
          size="big"
          onPress={() => navigation.navigate('profile-infos-name')}
        >
          {profileFlowStore.coords && <ApprovedIcon />}
          Your name
        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button theme="gray" size="big" onPress={getGeolocation}>
          {profileFlowStore.coords && <ApprovedIcon />} Enable geolocation
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          theme="gray"
          size="big"
          onPress={() => navigation.navigate('profile-infos-phone')}
        >
          {profileFlowStore.phone && profileFlowStore.dialCode && (
            <ApprovedIcon />
          )}
          Phone
        </Button>
      </View>

      {profileFlowStore.role === 'needer' && (
        <View style={styles.buttonContainer}>
          <Button
            size="big"
            theme="gray"
            onPress={() => navigation.navigate('profile-infos-address')}
          >
            {profileFlowStore.coords && <ApprovedIcon />} Address
          </Button>
        </View>
      )}

      {profileFlowStore.isValid() && (
        <Button onPress={() => navigation.navigate('signup')}>GO</Button>
      )}
    </View>
  );
});
