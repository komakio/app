import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
} from 'react-native';
import { NavButton } from './button-navbar';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

interface BottomNavbarProps {
  onBack?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onNext?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const BottomNavbar: FC<BottomNavbarProps> = memo(
  ({ onBack, onNext }) => {
    const { t } = useTranslation();

    return (
      <View
        style={[styles.container, !onBack && !onNext && styles.transparent]}
      >
        {onBack && (
          <NavButton
            onPress={onBack}
            iconName="arrow-left"
            text={t('ACTIONS_BACK')}
          />
        )}
        {onNext && (
          <NavButton
            onPress={onNext}
            iconName="arrow-right"
            text={t('ACTIONS_NEXT')}
            isNext={true}
          />
        )}
      </View>
    );
  }
);
