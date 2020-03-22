import React, { memo, FC } from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  textBold: { fontFamily: 'Sen-Bold' },
  text: { fontFamily: 'Sen' },
});

interface TextProps extends RNTextProps {
  bold?: boolean;
}

export const Text: FC<TextProps> = memo(props => (
  <RNText
    {...props}
    style={[props.bold ? styles.textBold : styles.text, props.style]}
  />
));

interface AnimatableTextProps
  extends TextProps,
    Animatable.AnimatableProperties<{ fontSize: number }> {}

export const AnimatedText: FC<AnimatableTextProps> = memo(props => (
  <Animatable.Text
    {...props}
    style={[props.bold ? styles.textBold : styles.text, props.style]}
  />
));
