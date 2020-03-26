import React, { memo, FC } from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Platform,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Text } from '../text';
import { View } from 'react-native-animatable';

interface ButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  rippleColor?: string;
}

export const Touchable: FC<ButtonProps> = memo(
  ({ onPress, children, containerStyle, textStyle, disabled, rippleColor }) => {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          disabled={disabled}
          background={TouchableNativeFeedback.Ripple(rippleColor || '#EEE')}
        >
          <View style={containerStyle}>
            {typeof children === 'string' && (
              <Text style={textStyle}>{children}</Text>
            )}
            {typeof children !== 'string' && children}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={containerStyle}
        disabled={disabled}
      >
        {typeof children === 'string' && (
          <Text style={textStyle}>{children}</Text>
        )}
        {typeof children !== 'string' && children}
      </TouchableOpacity>
    );
  }
);
