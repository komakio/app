import React, { memo, FC } from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextProperties,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  text: { fontFamily: 'Sen-Bold' },
});

type TextProps = RNTextProps;

export const Text: FC<TextProps> = memo(props => (
  <RNText {...props} style={[styles.text, props.style]} />
));

interface AnimatableTextProps
  extends TextProps,
    Animatable.AnimatableProperties<{ fontSize: number }> {
  //   transition: string;
}

export const AnimatedText: FC<AnimatableTextProps> = memo(props => (
  <Animatable.Text {...props} style={[styles.text, props.style]} />
));
