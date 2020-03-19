import React, { memo, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { ActionButton } from './action-button';
import { PasswordPlaceholder } from './password-placeholder';
import { useNavigation, StackActions } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6200ee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 50,
  },
  actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
});

export const Login = memo(() => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onPressNumber = (number: number) => () => {
    setPassword(`${password}${number}`);
    if (password.length === 3) {
      navigation.dispatch(StackActions.replace('CreateProfile-Type'));
      return;
    }
  };

  const onDelete = () => {
    setPassword(password.substring(0, password.length - 1));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Type your 4-digit password</Title>
      <PasswordPlaceholder countTyped={password.length} />
      <View style={styles.actionButtonRow}>
        <ActionButton number={1} onPress={onPressNumber(1)} />
        <ActionButton number={2} onPress={onPressNumber(2)} />
        <ActionButton number={3} onPress={onPressNumber(3)} />
      </View>
      <View style={styles.actionButtonRow}>
        <ActionButton number={4} onPress={onPressNumber(4)} />
        <ActionButton number={5} onPress={onPressNumber(5)} />
        <ActionButton number={6} onPress={onPressNumber(6)} />
      </View>
      <View style={styles.actionButtonRow}>
        <ActionButton number={7} onPress={onPressNumber(7)} />
        <ActionButton number={8} onPress={onPressNumber(8)} />
        <ActionButton number={9} onPress={onPressNumber(9)} />
      </View>
      <View style={styles.actionButtonRow}>
        <ActionButton number={0} hidden={true} />
        <ActionButton number={0} onPress={onPressNumber(0)} />
        <ActionButton icon="arrow-left" onPress={onDelete} />
      </View>
    </View>
  );
});
