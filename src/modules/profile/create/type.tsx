import React, { memo, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6200ee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 50,
  },
  //   actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
});

export const CreateProfileType = memo(() => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Choose your type of account</Title>
    </View>
  );
});
