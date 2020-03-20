import React, { memo, FC } from 'react';
import { View, StyleSheet, PixelRatio } from 'react-native';

const dotBackgroundColor = 'white';
const dotSize = 20;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    flexDirection: 'row',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize,
    borderColor: dotBackgroundColor,
    borderWidth: 1 / PixelRatio.get(),
    marginRight: 5,
  },
  dotActive: {
    backgroundColor: dotBackgroundColor,
  },
});

interface DotProps {
  active: boolean;
}

const Dot: FC<DotProps> = memo(({ active }) => {
  return <View style={[styles.dot, active && styles.dotActive]} />;
});

interface PasswordPlaceholderProps {
  countTyped?: number;
}

export const PasswordPlaceholder: FC<PasswordPlaceholderProps> = memo(
  ({ countTyped }) => {
    return (
      <View style={styles.container}>
        <Dot active={countTyped >= 1} />
        <Dot active={countTyped >= 2} />
        <Dot active={countTyped >= 3} />
        <Dot active={countTyped >= 4} />
      </View>
    );
  }
);
