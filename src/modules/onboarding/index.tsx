import React, { memo } from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '@shared/text';
import { BottomNavbar } from '../nav-bar';
import { useProfileFlowStore } from '@stores';
import { useTranslation } from 'react-i18next';
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
    height: 200,
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
});

const screensHelpers = [
  {
    image: require('@images/onboarding/neighbors.png'),
    title: 'How it works',
    subtitle:
      'When someone close to you needs help, you’ll receive a notification', // neighbors
  },
  {
    image: require('@images/onboarding/accept.png'),
    title: 'How it works',
    subtitle: 'When you hit the “Accept” button, you will be matched with them', // accept
  },
  {
    image: require('@images/onboarding/call.png'),
    title: 'How it works',
    subtitle: 'Call or text the volunteer to communicate your request', // call
  },
  {
    image: require('@images/onboarding/request.png'),
    title: 'What now?',
    subtitle: 'You can either send a request now or when you will need it', // request
  },
  {
    image: require('@images/onboarding/doctors.png'),
    title: 'User instructions',
    subtitle: 'Please read through our safety instructions', // doctors
  },
];

const screensNeeder = [
  {
    image: require('@images/onboarding/collaboration.png'),
    title: 'How it works',
    subtitle:
      'You can send out a request for help by pressing the “Request help button”', // collaboration
  },
  {
    image: require('@images/onboarding/accept.png'),
    title: 'How it works',
    subtitle:
      'When someone accepts your request, you get a notification and their contact information', // accept
  },
  {
    image: require('@images/onboarding/call.png'),
    title: 'How it works',
    subtitle: 'Call or text the volunteer to communicate your request', // call
  },
  {
    image: require('@images/onboarding/request.png'),
    title: 'What now?',
    subtitle: 'You can either send a request now or when you will need it', // request
  },
  {
    image: require('@images/onboarding/doctors.png'),
    title: 'User instructions',
    subtitle: 'Please read through our safety instructions', // doctors
  },
];

export const Onboarding = memo(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const { t } = useTranslation();

  const screens =
    profileFlowStore.role === 'helper' ? screensHelpers : screensNeeder;

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
            <Text style={styles.title}>{screen.title}</Text>
            <Text style={styles.subtitle}>{screen.subtitle}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
});
