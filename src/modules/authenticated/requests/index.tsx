import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from '../../../shared/text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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

export const AuthenticatedRequests = memo(() => {
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title} bold={true}>
        Requests
      </Text>

      {/* <Button
        style={styles.button}
        onPress={() => navigation.navigate('profile-type')}
      >
        Get started
      </Button> */}
    </View>
  );
});
