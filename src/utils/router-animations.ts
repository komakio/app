import { Animated } from 'react-native';
import { StackCardInterpolationProps } from '@react-navigation/stack';
import { GestureDirection } from '@react-navigation/stack/lib/typescript/src/types';

const { multiply } = Animated;

export const TransitionIOSSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export class RouterAnimations {
  public static stackLeftRightFull = {
    gestureDirection: 'horizontal' as GestureDirection,
    cardStyleInterpolator: ({
      current,
      next,
      inverted,
      layouts: { screen },
    }: StackCardInterpolationProps) => {
      const translateFocused = multiply(
        current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [screen.width, 0],
          extrapolate: 'clamp',
        }),
        inverted
      );

      const translateUnfocused = next
        ? multiply(
            next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, screen.width * -1],
              extrapolate: 'clamp',
            }),
            inverted
          )
        : 0;

      const overlayOpacity = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.07],
        extrapolate: 'clamp',
      });

      const shadowOpacity = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.3],
        extrapolate: 'clamp',
      });

      return {
        cardStyle: {
          transform: [
            // Translation for the animation of the current card
            { translateX: translateFocused },
            // Translation for the animation of the card on top of this
            { translateX: translateUnfocused },
          ],
        },
        overlayStyle: { opacity: overlayOpacity },
        shadowStyle: { shadowOpacity },
      };
    },
  };
}
