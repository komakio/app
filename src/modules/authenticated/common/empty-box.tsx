import React, { memo, FC } from 'react';

import { StyleSheet } from 'react-native';
import { colors } from '../../../shared/variables/colors';
import { View } from 'react-native-animatable';
import { Text } from '../../../shared/text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey200,
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 24,
  },
});

interface EmptyBoxProps {
  title: string;
}

export const EmptyBox: FC<EmptyBoxProps> = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The more healthy helpers the better. Add your friends and help out.{' '}
      </Text>
    </View>
  );
});
