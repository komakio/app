// import React, { memo } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { RequestsMain } from './list';
// import { RequestView } from '../request';
// import { colors } from '../../../shared/variables/colors';
// import { Theme } from '../../../shared/variables/theme';

// const Stack = createStackNavigator();

// const modalOptions = {
//   cardStyle: {
//     backgroundColor: colors.grey100,
//     borderTopLeftRadius: Theme.borderRadius,
//     borderTopRightRadius: Theme.borderRadius,
//   },
// };

// export const RequestsRouter = memo(() => {
//   return (
//     <Stack.Navigator
//       mode="modal"
//       screenOptions={{
//         headerShown: false,
//         cardStyle: {
//           backgroundColor: 'transparent',
//         },
//         cardOverlayEnabled: false,
//       }}
//     >
//       <Stack.Screen name="requests-main" component={RequestsMain} />

//     </Stack.Navigator>
//   );
// });
