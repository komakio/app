import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Linking,
  GestureResponderEvent,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '@shared/text';
import { useProfileFlowStore } from '@stores';
import { Geolocation } from '@utils/geolocation';
import { observer } from 'mobx-react-lite';
import { useTranslation, Trans } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBoxButton } from '@shared/button/checkbox-button';
import { BottomNavbar } from '@modules/nav-bar/nav-bar';
import { colors } from '@shared/variables/colors';
import { CheckboxLink } from '@shared/checkbox-link';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 16,
  },
  description: {
    fontSize: 20,
    marginBottom: 22,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  termsServiceText: {
    color: colors.green300,
    textAlign: 'right',
    marginBottom: 20,
  },
  textLink: {
    textDecorationLine: 'underline',
  },
});

export const InfosMain = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const { t } = useTranslation();

  const goToNext = async () => {
    Alert.alert(t('CONSENTS_CONFIRM'), '', [
      { text: t('ACTIONS_CANCEL'), style: 'cancel' },
      {
        text: t('ACTIONS_CONFIRM'),
        onPress: async () => {
          if (profileFlowStore.role === 'helper') {
            navigation.navigate('consents');
            return;
          }

          const res = await profileFlowStore.saveProfile();
          if (!res) {
            Alert.alert('Error saving profile');
            return;
          }
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'authenticated' }],
            })
          );
        },
      },
    ]);
    return;
  };

  const onServiceTerms = () => {
    profileFlowStore.serviceTerms = !profileFlowStore.serviceTerms;
  };

  const onPolicyTerms = () => {
    profileFlowStore.policyTerms = !profileFlowStore.policyTerms;
  };

  const onClickLink = (link: string) => (event: GestureResponderEvent) => {
    event.stopPropagation();
    Linking.openURL(link);
  };

  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {profileFlowStore.role === 'helper' && (
          <View>
            <Text bold={true} style={styles.title}>
              {t('PROFILE_SETUP_HELPER_TITLE')}
            </Text>

            <Text style={styles.description}>{t('PROFILE_SETUP_TITLE')}</Text>
          </View>
        )}
        {profileFlowStore.role === 'needer' && (
          <View>
            <Text bold={true} style={styles.title}>
              {t('PROFILE_SETUP_TITLE')}
            </Text>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-name')}
            checked={
              !!(profileFlowStore.firstName && profileFlowStore.lastName)
            }
          >
            {t('PROFILE_SETUP_NAME')}
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => profileFlowStore.getGeolocation(navigation)}
            checked={!!profileFlowStore.coords}
          >
            {t('PROFILE_SETUP_GEOLOCATION')}
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-phone')}
            checked={!!(profileFlowStore.phone && profileFlowStore.dialCode)}
          >
            {t('PROFILE_SETUP_PHONE')}
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckboxLink
            onPress={onServiceTerms}
            checked={profileFlowStore.serviceTerms}
          >
            <Trans
              i18nKey="PROFILE_SETUP_TERMS_CONFIRM"
              components={[
                <Text
                  onPress={onClickLink('https://komak.io/terms-of-service/')}
                  key="textComponent"
                  style={styles.textLink}
                ></Text>,
              ]}
            />
          </CheckboxLink>
          <CheckboxLink
            onPress={onPolicyTerms}
            checked={profileFlowStore.policyTerms}
          >
            <Trans
              i18nKey="PROFILE_SETUP_PRIVACY_POLICY_CONFIRM"
              components={[
                <Text
                  onPress={onClickLink('https://komak.io/privacy/')}
                  key="textComponent"
                  style={styles.textLink}
                ></Text>,
              ]}
            />
          </CheckboxLink>
        </View>
      </ScrollView>
      <BottomNavbar
        onBack={navigation.canGoBack() && navigation.goBack}
        onNext={profileFlowStore.isValid() && goToNext}
      />
    </View>
  );
});
