import React, { memo, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { StyleSheet, View, StatusBar, PixelRatio, Image } from 'react-native';
import { Title, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Subheading } from 'react-native-paper';
import { Text } from '../../shared/text';

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
  },
  button: {
    marginTop: 50,
    marginBottom: 100,
  },
  //   actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
});

export const Intro = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you for making an impact</Text>

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('profile-type')}
      >
        Get started
      </Button>
    </View>
  );
});
