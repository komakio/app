import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import { Text } from '../text';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  commonButton: {
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: '#E3E3E3',
    borderColor: '#E3E3E3',
  },

  smallButton: {
    width: 165,
    padding: 10,
  },

  bigButton: {
    width: 246,
    padding: 20,
  },

  blueButton: {
    backgroundColor: '#1A78E6',
    borderColor: '#1A78E6',
  },

  greenButton: {
    backgroundColor: '#3BE338',
    borderColor: '#3BE338',
  },

  redButton: {
    backgroundColor: '#E34238',
    borderColor: '#E34238',
  },

  grayButton: {
    backgroundColor: '#E3E3E3',
    borderColor: '#E3E3E3',
  },

  commonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  disabledText: {
    color: 'gray',
  },

  blackText: {
    color: 'black',
  },
});

/**
 * I've use the button from React-native because it is simple
 * But we should use a combination of TouchableOpacity (IOS)/ TouchableNativeFeedback (android) + View
 */

interface ButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  children: string | string[];
  style?: StyleProp<ViewStyle>;
  size?: 'small' | 'big';
  theme?: 'blue' | 'green' | 'red' | 'gray';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    onPress,
    theme = 'blue',
    children,
    style,
    size = 'small',
    disabled = false,
  }) => {
    const buttonStyles = [
      styles.commonButton,
      size === 'small' && styles.smallButton,
      size === 'big' && styles.bigButton,
      theme === 'blue' && styles.blueButton,
      theme === 'red' && styles.redButton,
      theme === 'green' && styles.greenButton,
      theme === 'gray' && styles.grayButton,
      disabled && styles.disabledButton,
      style,
    ];

    const textStyle = [
      [
        styles.commonText,
        theme === 'gray' && styles.blackText,
        disabled && styles.disabledText,
      ],
    ];
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          style={buttonStyles}
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
        style={buttonStyles}
        disabled={disabled}
      >
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
);
