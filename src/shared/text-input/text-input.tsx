import React, { memo, FC } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  PixelRatio,
  ViewStyle,
} from 'react-native';
import { Text } from '@shared/text';
import { colors } from '@shared/variables/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
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
  label?: string;
  containerStyle?: ViewStyle;
}

export const TextInput: FC<TextInputProps> = memo(
  ({ label, containerStyle, style, ...props }) => (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text bold={true} style={styles.label}>
          {label}
        </Text>
      )}
      <RNTextInput
        {...props}
        placeholderTextColor={colors.grey300}
        style={[styles.input, style]}
      />
    </View>
  )
);
