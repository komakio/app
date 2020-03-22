import React, { memo, FC, useState } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { VirtualKeyboard } from '../../../shared/virtual-keyboard';

const dotSize = 64;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: 10,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: 'rgba(26, 120, 230, 0.5)',
    borderWidth: 1 / PixelRatio.get(),
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotActive: {
    borderColor: '#1A78E6',
  },
  circle: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});

interface DotProps {
  active: boolean;
}

const Dot: FC<DotProps> = memo(({ active }) => {
  return (
    <View style={[styles.dot, active && styles.dotActive]}>
      {active && <View style={styles.circle} />}
    </View>
  );
});

interface PasswordProps {
  onCompletePassword: (password: string, onFail: () => void) => void;
}

export const Password: FC<PasswordProps> = memo(({ onCompletePassword }) => {
  const [password, setPassword] = useState('');
  const [isShowingKeyboard, setIsShowingKeyboard] = useState<boolean>(true);

  const onChangePassword = (password: string) => {
    setPassword(password);
    if (password.length === 4) {
      setIsShowingKeyboard(false);
      onCompletePassword(password, () => {
        setIsShowingKeyboard(true);
        setPassword('');
      });
    }
  };

  return (
    <View style={styles.container}>
      <VirtualKeyboard
        value={password}
        onChangeValue={onChangePassword}
        keyboardType="number-pad"
        show={isShowingKeyboard}
      />
      <Dot active={password.length >= 1} />
      <Dot active={password.length >= 2} />
      <Dot active={password.length >= 3} />
      <Dot active={password.length >= 4} />
    </View>
  );
});
