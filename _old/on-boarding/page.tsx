// import React, { memo } from 'react';

// import { useNavigation, StackActions } from '@react-navigation/native';
// import Swiper from 'react-native-swiper';
// import { StyleSheet, View, Image } from 'react-native';
// import { Subheading, Button, Title } from 'react-native-paper';
// import { useTranslation } from 'react-i18next';
// import { useUserStore } from '../../stores';

// const styles = StyleSheet.create({
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     // color: '#fff',
//     fontSize: 30,
//     marginTop: 30,
//   },
//   subheading: {
//     // color: '#fff',
//     fontSize: 23,
//     marginTop: 15,
//     marginBottom: 30,
//   },
// });

// const slides = [
//   {
//     title: 'HELLO',
//     subheading: 'Please ?',
//     backgroundColor: '#9DD6EB',
//   },
//   { title: 'Joon', subheading: 'dasd', backgroundColor: '#97CAE5' },
//   { title: 'Without background', subheading: 'Yo', backgroundColor: 'white' },
// ];

// const IMAGE_SIZE = 250;

// export const OnBoarding = memo(() => {
//   const navigation = useNavigation();
//   const { t } = useTranslation();
//   const userStore = useUserStore();

//   return (
//     <Swiper showsButtons={false} loop={false} activeDotColor="#6200ee">
//       {slides.map(slide => (
//         <View
//           key={slide.title}
//           style={[styles.slide, { backgroundColor: slide.backgroundColor }]}
//         >
//           <Image
//             style={{ width: IMAGE_SIZE, height: (IMAGE_SIZE * 955) / 1200 }}
//             source={require('../../images/virus.png')}
//           />
//           <Title style={styles.title}>{t(slide.title)}</Title>
//           <Subheading style={styles.subheading}>
//             {t(slide.subheading)}
//           </Subheading>

//           <Button
//             icon="camera"
//             mode="contained"
//             onPress={() => navigation.dispatch(StackActions.replace('Login'))}
//           >
//             Get started - {userStore.test}
//           </Button>
//         </View>
//       ))}
//     </Swiper>
//   );
// });
