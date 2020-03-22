// import React, { memo, FC } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'rgba(255,255,255,0.5)',
//     // opacity: 0.2,
//     width: 60,
//     height: 60,
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   text: {
//     fontSize: 25,
//   },
// });

// interface ActionButtonProps {
//   number?: number;
//   icon?: string;
//   hidden?: boolean;
//   onPress?: () => void;
// }

// export const ActionButton: FC<ActionButtonProps> = memo(
//   ({ number, hidden, icon, onPress }) => {
//     return (
//       <TouchableRipple
//         onPress={onPress}
//         rippleColor="rgba(0, 0, 0, .32)"
//         // underlayColor="white"
//         style={[styles.button, hidden && { opacity: 0 }]}
//         borderless={true}
//       >
//         <View>
//           <Text style={styles.text}>
//             {typeof number === 'number' ? (
//               number
//             ) : (
//               <Icon name={icon} size={25} />
//             )}
//           </Text>
//         </View>
//       </TouchableRipple>
//     );
//   }
// );
