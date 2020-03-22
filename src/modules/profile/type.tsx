import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';

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

  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        What is you status ?
      </Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('profile-infos')}
      >
        Healthy
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('profile-infos')}
      >
        Sick
      </Button>
    </View>
  );
});
