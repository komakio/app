import React, { memo, FC } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  PixelRatio,
} from 'react-native';
import { Text } from '../text';
import { colors } from '../variables/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 4 / PixelRatio.get(),
    fontFamily: 'Sen',
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: colors.grey500,
    color: colors.grey500,
    borderRadius: 10,
    padding: 18,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export const TextInput: FC<TextInputProps> = memo((props) => (
  <View style={styles.container}>
    <Text bold={true} style={styles.label}>
      {props.label}
    </Text>
    <RNTextInput
      {...props}
      placeholderTextColor={colors.grey300}
      style={[styles.input, props.style]}
    />
  </View>
));
