import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
} from 'react-native';
import { NavButton } from './nav-button';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  back: {
    flexDirection: 'row',
    width: 220,
  },

  next: {
    flexDirection: 'row-reverse',
    width: 220,
  },
});

interface NavBarProps {
  onBack?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  OnNext?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const NavBar: FC<NavBarProps> = memo(({ onBack, OnNext }) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <NavButton
          onPress={onBack}
          iconName="arrow-left"
          text="Back"
          style={styles.back}
        />
      )}
      {onBack && (
        <NavButton
          onPress={OnNext}
          iconName="arrow-right"
          text="Next"
          style={styles.next}
        />
      )}
    </View>
  );
});
