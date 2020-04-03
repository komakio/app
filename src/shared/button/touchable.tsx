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
  AccessibilityRole,
} from 'react-native';
import { Text } from '@shared/text';

interface ButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  rippleColor?: string;
  accessibilityRole: AccessibilityRole;
}

export const Touchable: FC<ButtonProps> = memo(
  ({
    onPress,
    children,
    containerStyle,
    textStyle,
    disabled,
    rippleColor,
    accessibilityRole,
  }) => {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          disabled={disabled}
          background={TouchableNativeFeedback.Ripple(rippleColor || '#EEE')}
          accessibilityRole={accessibilityRole}
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
        accessibilityRole={accessibilityRole}
      >
        {typeof children === 'string' && (
          <Text style={textStyle}>{children}</Text>
        )}
        {typeof children !== 'string' && children}
      </TouchableOpacity>
    );
  }
);
