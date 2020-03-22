import React, { memo, FC, useState } from 'react';
import { View, StyleSheet, PixelRatio } from 'react-native';
import { VirtualKeyboard } from '../../../shared/virtual-keyboard';

const dotBackgroundColor = 'black';
const dotSize = 50;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: 10,
    borderColor: dotBackgroundColor,
    borderWidth: 1 / PixelRatio.get(),
    marginRight: 5,
  },
  dotActive: {
    backgroundColor: dotBackgroundColor,
  },
});

interface DotProps {
  active: boolean;
}

const Dot: FC<DotProps> = memo(({ active }) => {
  return <View style={[styles.dot, active && styles.dotActive]} />;
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
