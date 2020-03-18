import React, {memo, FC} from 'react';
import {StyleSheet, View, Image, ImageSourcePropType} from 'react-native';

import {Title, Subheading} from 'react-native-paper';

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
  },
});

const IMAGE_SIZE = 250;

interface OnBoardingSlideProps {
  title: string;
  subheading: string;
  sourceImage: ImageSourcePropType;
  backgroundColor?: string;
}

export const OnBoardingSlide: FC<OnBoardingSlideProps> = memo(
  ({sourceImage, title, subheading, backgroundColor}) => {
    return (
      <View style={[styles.slide, {backgroundColor}]}>
        <Image
          style={{width: IMAGE_SIZE, height: (IMAGE_SIZE * 955) / 1200}}
          source={sourceImage}
        />
        <Title style={styles.title}>{title}</Title>
        <Subheading style={styles.subheading}>{subheading}</Subheading>
      </View>
    );
  },
);
