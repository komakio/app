import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { CheckBoxButton } from '../../../shared/button';
import { useProfileFlowStore } from '../../../stores';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});

export const settingProfileInfo = observer(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();

  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('setting-profile-name')}
            checked={
              !!(profileFlowStore.firstName && profileFlowStore.lastName)
            }
          >
            Your name
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('setting-profile-phone')}
            checked={!!(profileFlowStore.phone && profileFlowStore.dialCode)}
          >
            Phone
          </CheckBoxButton>
        </View>
      </ScrollView>
    </View>
  );
});
