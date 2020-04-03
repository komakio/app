import { Easing } from 'react-native';

export class Animations {
  // https://material.io/design/motion/speed.html#easing
  public static Easing = {
    standard: Easing.bezier(0.4, 0.0, 0.2, 1),
    decelerated: Easing.bezier(0.0, 0.0, 0.2, 1),
    accelerated: Easing.bezier(0.4, 0.0, 1, 1),
  };
}
