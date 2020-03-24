import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
} from 'react-native';
import { NavButton } from './button-navbar';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },

  back: {
    flexDirection: 'row',
    width: 280,
    flex: 3,
  },

  next: {
    flexDirection: 'row-reverse',
    width: 150,
    flex: 1,
  },
});

interface BottomNavbarProps {
  onBack?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onNext?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const BottomNavbar: FC<BottomNavbarProps> = memo(
  ({ onBack, onNext }) => {
    return (
      <View style={styles.container}>
        {onBack && (
          <NavButton
            onPress={onBack}
            iconName="arrow-left"
            text="Back"
            style={onNext ? styles.back : [styles.back, { width: 500 }]}
          />
        )}
        {onNext && (
          <NavButton
            onPress={onNext}
            iconName="arrow-right"
            text="Next"
            style={styles.next}
          />
        )}
      </View>
    );
  }
);
