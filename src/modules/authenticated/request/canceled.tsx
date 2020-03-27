import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../shared/text';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';
import { Button } from '../../../shared/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export const CanceledRequestView = observer(() => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>The request has been canceled</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={navigation.goBack}>Ok</Button>
      </View>
    </KeyboardAvoidingView>
  );
});
