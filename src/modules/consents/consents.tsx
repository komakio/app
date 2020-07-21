import React, { useState, memo } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '@shared/text';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckboxFormElement } from '@shared/button';
import { BottomNavbar } from '@modules/nav-bar/nav-bar';
import { useProfileFlowStore } from '@stores';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  scrollView: {
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
});

export const Consents = memo(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const { t } = useTranslation();

  const [checkboxes, setCheckboxes] = useState([
    {
      enabled: false,
      description: t('CONSENTS_SYMPTOMS'),
    },
    {
      enabled: false,
      description: t('CONSENTS_TRAVEL'),
    },
    {
      enabled: false,
      description: t('CONSENTS_CONTACT'),
    },
  ]);

  const allConsents = checkboxes.every((c) => c.enabled);
  const goToNext = async () => {
    const res = await profileFlowStore.saveProfile();
    if (!res) {
      Alert.alert('Error saving profile');
      return;
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'onboarding' }],
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text bold={true} style={styles.title}>
          {t('CONSENTS_TITLE')}
        </Text>

        {checkboxes.map((checkbox) => (
          <View style={styles.buttonContainer} key={checkbox.description}>
            <CheckboxFormElement
              onPress={() => {
                checkbox.enabled = !checkbox.enabled;
                setCheckboxes([...checkboxes]);
              }}
              checked={checkbox.enabled}
            >
              {checkbox.description}
            </CheckboxFormElement>
          </View>
        ))}
      </ScrollView>
      <BottomNavbar
        onBack={navigation.goBack}
        onNext={allConsents && goToNext}
      />
    </View>
  );
});
