import React, { memo, FC } from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10000,
  },
});

interface VirtualKeyboardProps {
  show?: boolean;
  value: string;
  onChangeValue: (value: string) => void;
  keyboardType: TextInputProps['keyboardType'];
}

export const VirtualKeyboard: FC<VirtualKeyboardProps> = memo(
  ({ show, value, onChangeValue, keyboardType }) => {
    if (!show) {
      return null;
    }

    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeValue}
        />
      </View>
    );
  }
);

VirtualKeyboard.defaultProps = {
  show: true,
};
