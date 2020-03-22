import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { Button } from '../../shared/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 22,
  },
  button: {
    marginTop: 50,
    marginBottom: 100,
  },
});

export const Intro = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        Thank you for making an impact
      </Text>

      <Button
        style={styles.button}
        onPress={() => navigation.navigate('profile-type')}
      >
        Get started
      </Button>
    </View>
  );
});
