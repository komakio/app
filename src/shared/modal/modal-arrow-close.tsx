import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 50,
  },
});

export const ModalArrowClose = memo(() => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={navigation.goBack}>
      <Icon name="menu-down" size={50} color="#C7C7CC" />
    </TouchableOpacity>
  );
});
