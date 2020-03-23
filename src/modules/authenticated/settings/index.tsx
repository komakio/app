import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { Button } from '../../../shared/button';
import { useUserStore } from '../../../stores';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 100,
  },
  button: {
    marginTop: 50,
    marginBottom: 100,
  },
});

export const AuthenticatedSettings = memo(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        Settings
      </Text>

      <Button
        theme="gray"
        onPress={async () => {
          await userStore.logout();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'intro' }],
            })
          );
          // navigation.navigate('profile-type');
        }}
      >
        Logout
      </Button>
    </View>
  );
});
