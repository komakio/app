import React, { memo, FC } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  PixelRatio,
} from 'react-native';
import { Text } from '../text';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  label: {
    fontSize: 20,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1 / PixelRatio.get(),
    fontFamily: 'Sen',
    width: '100%',
    backgroundColor: 'white',
  },
  // text: { fontFamily: 'Sen' },
});

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export const TextInput: FC<TextInputProps> = memo(props => (
  <View style={styles.container}>
    <Text bold={true} style={styles.label}>
      {props.label}
    </Text>
    <RNTextInput {...props} style={[styles.input, props.style]} />
  </View>
));
