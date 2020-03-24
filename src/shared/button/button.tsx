import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { Text } from '../text';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { colors } from '../variables/colors';
import { rgbaToHex } from '../../utils/colors';

const styles = StyleSheet.create({
  commonButton: {
    display: 'flex',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  disabledButton: {
    backgroundColor: rgbaToHex(colors.green100, 0.5),
  },

  smallButton: {
    width: 165,
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

  redButton: {
    backgroundColor: colors.red400,
    borderColor: colors.red400,
  },

  commonText: {
    color: 'white',
    textAlign: 'center',
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
  theme?: 'blue' | 'green' | 'red' | 'gray';
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
      // theme === 'gray' && styles.grayButton,
      disabled && styles.disabledButton,
    ];

    const textStyle = [
      [
        styles.commonText,
        // theme === 'gray' && styles.blackText,
        // disabled && styles.disabledText,
      ],
    ];
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          style={[buttonStyles, style]}
          disabled={disabled}
          background={TouchableNativeFeedback.Ripple('#EEE')}
        >
          <Text style={textStyle}>{children}</Text>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[buttonStyles, style]}
        disabled={disabled}
      >
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
);
