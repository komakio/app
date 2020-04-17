import React, { memo, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import { colors } from '../shared/variables/colors';
import { useCodepushStore } from '../stores';
import { waitForSomeMs } from '../utils/timeout';
import RNBootSplash from 'react-native-bootsplash';
import { statusBarHeight } from '../utils/status-bar';
import { Animations } from '../utils/animations';
import { CodePushProgress } from './code-push-progress';

const bootsplashImageSize = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  logo: {
    height: bootsplashImageSize,
    width: bootsplashImageSize,
  },
  mainView: { top: statusBarHeight + 50 },
});

const useNativeDriver = true;

export const Layout = memo(({ children }) => {
  const codePushStore = useCodepushStore();

  const opacity = useRef(new Animated.Value(0));
  const scale = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));

  const startAnimation = async () => {
    RNBootSplash.hide();

    Animated.timing(translateY.current, {
      useNativeDriver,
      toValue: -Dimensions.get('window').height / 2 + 30 + statusBarHeight,
      easing: Animations.Easing.standard,
    }).start(() => {
      Animated.timing(opacity.current, {
        useNativeDriver,
        toValue: 1,
        duration: 100,
        easing: Animations.Easing.standard,
      }).start();
    });

    Animated.timing(scale.current, {
      useNativeDriver,
      toValue: 0.7,
      easing: Animations.Easing.standard,
    }).start();
  };

  useEffect(() => {
    const init = async () => {
      await Promise.all([codePushStore.initialCheck(), waitForSomeMs(1000)]);
      startAnimation();
    };

    init();
  }, [codePushStore]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.grey200} barStyle="dark-content" />
      <CodePushProgress />
      <Animated.View style={[StyleSheet.absoluteFill, styles.bootsplash]}>
        <Animated.Image
          source={require('../../assets/bootsplash_logo.png')}
          fadeDuration={0}
          style={[
            styles.logo,
            {
              transform: [
                { translateY: translateY.current },
                { scale: scale.current },
              ],
            },
          ]}
        />
      </Animated.View>

      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          styles.mainView,
          { opacity: opacity.current },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
});
