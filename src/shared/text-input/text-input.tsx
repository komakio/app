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
    borderWidth: 1 / PixelRatio.get(),
    fontFamily: 'Sen',
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: colors.blue,
    color: colors.blue,
    borderEndWidth: 3,
    borderRadius: 20,
    padding: 18,
    fontWeight: 'bold',
    fontSize: 18,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
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
    <RNTextInput
      {...props}
      placeholderTextColor={colors.lightBlue}
      style={[styles.input, props.style]}
    />
  </View>
));
