import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { colors } from '../variables/colors';
import { rgbaToHex } from '../../utils/colors';
import { Touchable } from './touchable';

const styles = StyleSheet.create({
  commonButton: {
    display: 'flex',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  disabledButton: {
    backgroundColor: rgbaToHex(colors.grey300, 0.5),
  },

  smallButton: {
    width: 185,
    padding: 10,
  },

  bigButton: {
    width: 246,
    padding: 16,
    borderRadius: 40,
  },

  blueButton: {
    backgroundColor: colors.blue100,
    borderColor: colors.blue100,
  },

  greenButton: {
    backgroundColor: colors.green100,
    borderColor: colors.green100,
  },

  greyButton: {
    backgroundColor: colors.grey300,
    borderColor: colors.grey300,
  },

  redButton: {
    backgroundColor: colors.red400,
    borderColor: colors.red400,
  },

  commonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  disabledText: {
    color: 'gray',
  },

  blackText: {
    color: 'black',
  },
});

interface ButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  size?: 'small' | 'big';
  theme?: 'blue' | 'green' | 'red' | 'grey';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Button: FC<ButtonProps> = memo(
  ({
    onPress,
    theme = 'green',
    children,
    size = 'small',
    disabled = false,
    style,
  }) => {
    const buttonStyles = [
      styles.commonButton,
      size === 'small' && styles.smallButton,
      size === 'big' && styles.bigButton,
      theme === 'blue' && styles.blueButton,
      theme === 'red' && styles.redButton,
      theme === 'green' && styles.greenButton,
      theme === 'grey' && styles.greyButton,
      disabled && styles.disabledButton,
    ];

    return (
      <Touchable
        onPress={onPress}
        textStyle={styles.commonText}
        containerStyle={[buttonStyles, style]}
        accessibilityRole="button"
        disabled={disabled}
      >
        {children}
      </Touchable>
    );
  }
);
