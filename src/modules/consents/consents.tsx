import React, { useState, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBoxButton } from '../../shared/button/checkbox-button';
import { BottomNavbar } from '../nav-bar/nav-bar';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
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

  const [checkboxes, setCheckboxes] = useState([
    {
      enabled: false,
      description:
        'I am not showing any symptoms of COVID-19 (coughing, fever, shortness of breath, etc.).',
    },
    {
      enabled: false,
      description:
        'I have not travelled out of the country in the past 14 days.',
    },
    {
      enabled: false,
      description:
        'I have not come in contact with anyone suspected of being infected or sick in the past 14 days.',
    },
    {
      enabled: false,
      description: 'I have been practicing social distancing.',
    },
  ]);

  const allConsents = checkboxes.every(c => c.enabled);
  const goToInfographic = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'authenticated' }],
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text bold={true} style={styles.title}>
          I consent to the following questions:
        </Text>

        {checkboxes.map(checkbox => (
          <View style={styles.buttonContainer} key={checkbox.description}>
            <CheckBoxButton
              onPress={() => {
                checkbox.enabled = !checkbox.enabled;
                setCheckboxes([...checkboxes]);
              }}
              checked={checkbox.enabled}
            >
              {checkbox.description}
            </CheckBoxButton>
          </View>
        ))}
      </ScrollView>
      <BottomNavbar
        onBack={navigation.goBack}
        onNext={allConsents && goToInfographic}
      />
    </View>
  );
});
