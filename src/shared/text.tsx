import React, { memo, FC } from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

const styles = StyleSheet.create({
  textBold: { fontFamily: 'Sen-Bold' },
  text: { fontFamily: 'Sen' },
});

interface TextProps extends RNTextProps {
  bold?: boolean;
}

export const Text: FC<TextProps> = memo((props) => (
  <RNText
    {...props}
    style={[props.bold ? styles.textBold : styles.text, props.style]}
  />
));
