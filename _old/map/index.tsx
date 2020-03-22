// import React, { memo, useState } from 'react';

// import {
//   StyleSheet,
//   View,
//   StatusBar,
//   Text,
//   PixelRatio,
//   Image,
//   Picker,
// } from 'react-native';
// import { Title, Button, TextInput } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import MapView from 'react-native-maps';

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: '#6200ee',
//     // flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   title: {
//     // color: 'white',
//     marginBottom: 50,
//   },
//   //   actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
// });

// export const MapTest = memo(() => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={{ width: '100%', height: '100%' }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//       />
//     </View>
//   );
// });
