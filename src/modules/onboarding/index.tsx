import React, { memo } from 'react';

import {
  StyleSheet,
  View,
  Image,
  GestureResponderEvent,
  Linking,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '@shared/text';
import { BottomNavbar } from '../nav-bar';
import { useProfileFlowStore } from '@stores';
import { useTranslation, Trans } from 'react-i18next';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  image: {
    width: '100%',
    height: 260,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  textContainer: {
    height: 230,
    marginBottom: 30,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  textLink: {
    textDecorationLine: 'underline',
  },
});

const screensHelpers = [
  {
    image: require('@images/onboarding/neighbors.png'),
    title: 'ONBOARDING_HOW_IT_WORKS',
    subtitle: 'ONBOARDING_HELPER_TEXT_1', // neighbors
  },
  {
    image: require('@images/onboarding/accept.png'),
    title: 'ONBOARDING_HOW_IT_WORKS',
    subtitle: 'ONBOARDING_HELPER_TEXT_2', // accept
  },
  {
    image: require('@images/onboarding/call.png'),
    title: 'ONBOARDING_HOW_IT_WORKS',
    subtitle: 'ONBOARDING_HELPER_TEXT_3', // call
  },
  {
    image: require('@images/onboarding/request.png'),
    title: 'ONBOARDING_WHAT_NOW',
    subtitle: 'ONBOARDING_HELPER_TEXT_4', // request
  },
  {
    image: require('@images/onboarding/doctors.png'),
    title: 'ONBOARDING_USER_INSTRUCTIONS',
    subtitle: 'ONBOARDING_HELPER_TEXT_5', // doctors
  },
];

const screensNeeder = [
  {
    image: require('@images/onboarding/collaboration.png'),
    title: 'ONBOARDING_HOW_IT_WORKS',
    subtitle: 'ONBOARDING_NEEDER_TEXT_1', // collaboration
  },
  {
    image: require('@images/onboarding/accept.png'),
    title: 'ONBOARDING_HOW_IT_WORKS',
    subtitle: 'ONBOARDING_NEEDER_TEXT_2', // accept
  },
  {
    image: require('@images/onboarding/call.png'),
    title: 'ONBOARDING_HOW_IT_WORKS',
    subtitle: 'ONBOARDING_NEEDER_TEXT_3', // call
  },
  {
    image: require('@images/onboarding/request.png'),
    title: 'ONBOARDING_WHAT_NOW',
    subtitle: 'ONBOARDING_NEEDER_TEXT_4', // request
  },
  {
    image: require('@images/onboarding/doctors.png'),
    title: 'ONBOARDING_USER_INSTRUCTIONS',
    subtitle: 'ONBOARDING_NEEDER_TEXT_5', // doctors
  },
];

export const Onboarding = memo(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const { t } = useTranslation();

  const screens =
    profileFlowStore.role === 'needer' ? screensNeeder : screensHelpers;

  const onClickLink = (link: string) => (event: GestureResponderEvent) => {
    event.stopPropagation();
    Linking.openURL(link);
  };

  return (
    <Swiper
      loop={false}
      renderPagination={(index, total, context) => {
        return (
          <BottomNavbar
            onBack={index > 0 && (() => context.scrollBy(-1))}
            nextLabel={index === total - 1 && t('ACTIONS_START')}
            onNext={() => {
              if (index === total - 1) {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{ name: 'authenticated' }],
                  })
                );
                return;
              }
              context.scrollBy(1);
            }}
          />
        );
      }}
    >
      {screens.map((screen) => (
        <View key={screen.title} style={styles.slide}>
          <Image style={styles.image} source={screen.image} />

          <View style={styles.textContainer}>
            <Text style={styles.title}>{t(screen.title)}</Text>

            <Text style={styles.subtitle}>
              <Trans
                i18nKey={screen.subtitle}
                components={[
                  <Text
                    onPress={onClickLink('https://komak.io/user-instructions/')}
                    key="textComponent"
                    style={styles.textLink}
                  ></Text>,
                ]}
              />
            </Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
});
