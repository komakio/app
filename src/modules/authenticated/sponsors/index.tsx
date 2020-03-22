import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { Button } from '../../../shared/button';
import { Image } from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
  },
});

export const AuthenticatedSponsors = memo(() => {
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text bold={true} style={styles.title}>
        Those companies gracefully helped us
      </Text>
      <Image
        style={{ maxWidth: '50%', resizeMode: 'contain' }}
        source={require('../../../images/sponsors/oceanio.png')}
      />
    </View>
  );
});
