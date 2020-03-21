import React, { memo, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  PixelRatio,
  Image,
} from 'react-native';
import { Title, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Subheading } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: 'white',
    // marginBottom: 50,
  },
  //   actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
});

export const ProfileTypeTwo = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is you status ?</Text>
      <Text style={styles.title}>What is you status ?</Text>
      <Text style={styles.title}>What is you status ?</Text>
      <Text style={styles.title}>What is you status ?</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('profile-type')}
      >
        yo
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('profile-type')}
      >
        Sick
      </Button>
    </View>
  );
});
