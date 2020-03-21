import { LayoutAnimation } from 'react-native';

// const CONFIG = {
//   duration: 300,
//   create: {
//     type: LayoutAnimation.Types.linear,
//     property: LayoutAnimation.Properties.opacity,
//   },
//   update: {
//     type: LayoutAnimation.Types.easeInEaseOut,
//   },
// };

export function animate() {
  LayoutAnimation.easeInEaseOut();
}
