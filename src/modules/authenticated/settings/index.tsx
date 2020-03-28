import React from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { CheckBoxButton, Button } from '../../../shared/button';
import { useUserStore } from '../../../stores';
import { TabContainer } from '../common/tab-container';
import { StyleSheet, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  logoutButton: {
    marginTop: 80,
  },
});

export const AuthenticatedSettings = observer(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const { profile } = userStore;

  return (
    <TabContainer title="Profile">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-type')}
            checked={!!profile?.role}
          >
            Your Status
          </CheckBoxButton>
        </View>
        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-name')}
            checked={!!(profile?.firstName && profile?.lastName)}
          >
            Your name
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-phone')}
            checked={!!profile?.phone?.number}
          >
            Your Phone number
          </CheckBoxButton>
        </View>
        {profile.role === 'needer' && (
          <View style={styles.buttonContainer}>
            <CheckBoxButton
              onPress={() => navigation.navigate('profile-infos-address')}
              checked={!!profile?.address?.raw}
            >
              Your Address
            </CheckBoxButton>
          </View>
        )}

        <Button
          style={styles.logoutButton}
          theme="red"
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
