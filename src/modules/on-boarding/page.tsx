/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import Swiper from 'react-native-swiper';
import {OnBoardingSlide} from './slide';
import {View} from 'react-native';

export class OnBoarding extends Component {
  render() {
    return (
      <Swiper showsButtons={false} loop={false} activeDotColor="#6200ee">
        <OnBoardingSlide
          title="Help those in need"
          subheading="Please?"
          sourceImage={require('../../images/virus.png')}
          backgroundColor="#9DD6EB"
        />
        {/* <OnBoardingSlide
          title="Help those in need"
          subheading="Please?"
          sourceImage={require('../../images/virus.png')}
          backgroundColor="#97CAE5"
        /> */}
        {/* <OnBoardingSlide
          title="Help those in need"
          subheading="Please?"
          sourceImage={require('../../images/virus.png')}
          backgroundColor="#92BBD9"
        /> */}
      </Swiper>
    );
  }
}
