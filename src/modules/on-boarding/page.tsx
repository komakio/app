import React, { memo } from 'react';

import Swiper from 'react-native-swiper';
import { StyleSheet, View, Image } from 'react-native';
import { Subheading, Button, Title } from 'react-native-paper';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // color: '#fff',
    fontSize: 30,
    marginTop: 30,
  },
  subheading: {
    // color: '#fff',
    fontSize: 23,
    marginTop: 15,
    marginBottom: 30,
  },
});

const slides = [
  {
    title: 'Help someone in need',
    subheading: 'Please ?',
    backgroundColor: '#9DD6EB',
  },
  { title: 'Joon', subheading: 'dasd', backgroundColor: '#97CAE5' },
  { title: 'Without background', subheading: 'Yo', backgroundColor: 'white' },
];

const IMAGE_SIZE = 250;

export const OnBoarding = memo(() => {
  return (
    <Swiper showsButtons={false} loop={false} activeDotColor="#6200ee">
      {slides.map(slide => (
        <View
          key={slide.title}
          style={[styles.slide, { backgroundColor: slide.backgroundColor }]}
        >
          <Image
            style={{ width: IMAGE_SIZE, height: (IMAGE_SIZE * 955) / 1200 }}
            source={require('../../images/virus.png')}
          />
          <Title style={styles.title}>{slide.title}</Title>
          <Subheading style={styles.subheading}>{slide.subheading}</Subheading>

          <Button
            icon="camera"
            mode="contained"
            onPress={() => {
              console.log('pluf');
            }}
          >
            Get started
          </Button>
        </View>
      ))}
    </Swiper>
  );
});
