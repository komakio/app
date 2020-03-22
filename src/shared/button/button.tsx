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
    padding: 20,
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
}

export const Button: FC<ButtonProps> = memo(props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.container, props.style]}
  >
    <Text>{props.children}</Text>
  </TouchableOpacity>
));
