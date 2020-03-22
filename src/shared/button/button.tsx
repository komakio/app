import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  ViewStyle,
  PixelRatio,
} from 'react-native';
import { Text } from '../text';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'grey',
  },

  smallContainer: {
    padding: 10,
  },

  bigContainer: {
    padding: 20,
  },

  button: {
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
  },

  bigButton: {
    width: 246,
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

  text: {
    color: 'white',
    textAlign: 'center',
  },

  disabledText: {
    color: 'gray',
  },

  blackText: {
    color: 'black',
  },

  boldText: {
    fontWeight: 'bold',
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
  bold?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    onPress,
    theme = 'blue',
    children,
    style,
    size = 'small',
    disabled = false,
    bold = false,
  }) => {
    const buttonStyle = [style, styles.container, styles.button];
    const textStyle = [styles.text];

    if (size === 'small') {
      buttonStyle.push(styles.smallContainer, styles.smallButton);
    }

    if (size === 'big') {
      buttonStyle.push(styles.bigContainer, styles.bigButton);
    }

    if (theme === 'blue') {
      buttonStyle.push(styles.blueButton);
    }

    if (theme === 'red') {
      buttonStyle.push(styles.redButton);
    }

    if (theme === 'gray') {
      buttonStyle.push(styles.grayButton);
      textStyle.push(styles.blackText);
    }

    if (theme === 'green') {
      buttonStyle.push(styles.greenButton);
    }

    if (disabled) {
      buttonStyle.push(styles.disabledButton, styles.disabledText);
    }

    if (bold) {
      textStyle.push(styles.boldText);
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle}
        disabled={disabled}
      >
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
);
