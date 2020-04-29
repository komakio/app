import React, { memo, useRef, FC, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { colors } from '@shared/variables/colors';
import { Animations } from '@utils/animations';

export const squareSize = 28;
export const bigSquareSize = 52;

const styles = StyleSheet.create({
  container: {
    width: squareSize,
    height: squareSize,
    position: 'absolute',
  },
  big: {
    width: bigSquareSize,
    height: bigSquareSize,
  },
  rounded: {
    borderRadius: squareSize,
  },
  bigRounded: {
    borderRadius: bigSquareSize,
  },
  blue: {
    backgroundColor: colors.blue200,
  },
  red: {
    backgroundColor: colors.red200,
  },
});

interface SquareProps {
  x: number;
  y: number;
  type: 'blue' | 'red';
  circle?: boolean;
  big?: boolean;
}

export const Shape: FC<SquareProps> = memo(({ x, y, type, circle, big }) => {
  const radius = (big ? bigSquareSize : squareSize) / 2;
  const initialPosition = useRef({
    top: y - radius,
    left: x - radius,
  });
  const translateX = useRef(new Animated.Value(0));
  const translateY = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(translateX.current, {
      duration: 800,
      useNativeDriver: true,
      toValue: x - radius - initialPosition.current.left,
      easing: Animations.Easing.standard,
    }).start();
    Animated.timing(translateY.current, {
      duration: 800,
      useNativeDriver: true,
      toValue: y - radius - initialPosition.current.top,
      easing: Animations.Easing.standard,
    }).start();
  }, [x, y, radius]);

  return (
    <Animated.View
      style={[
        styles.container,
        big && styles.big,
        circle && styles.rounded,
        circle && big && styles.bigRounded,
        initialPosition.current,
        type === 'blue' ? styles.blue : styles.red,
        {
          transform: [
            { translateY: translateY.current },
            { translateX: translateX.current },
          ],
        },
      ]}
    />
  );
});
