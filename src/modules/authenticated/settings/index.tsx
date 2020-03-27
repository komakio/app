import React, { memo } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBoxButton, Button } from '../../../shared/button';
import { useProfileFlowStore, useUserStore } from '../../../stores';
import { TabContainer } from '../common/tab-container';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});

export const authenticatedSettings = memo(() => {
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const userStore = useUserStore();

  profileFlowStore.firstName = userStore.profile?.firstName;
  profileFlowStore.lastName = userStore.profile?.lastName;
  profileFlowStore.phone = userStore.profile?.phone?.number;

  return (
    <TabContainer title="Profile">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-name')}
            checked={
              !!(profileFlowStore.firstName && profileFlowStore.lastName)
            }
          >
            Your name
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-phone')}
            checked={!!profileFlowStore.phone}
          >
            Phone
          </CheckBoxButton>
        </View>
        <Button
          theme="grey"
          style={{ marginTop: 80 }}
          onPress={async () => {
            await userStore.logout();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'intro' }],
              })
            );
          }}
        >
          Logout
        </Button>
      </ScrollView>
    </TabContainer>
  );
});
