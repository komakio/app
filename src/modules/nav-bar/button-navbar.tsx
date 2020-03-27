import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
import { Text } from '../../shared/text';
import { colors } from '../../shared/variables/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Touchable } from '../../shared/button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  containerNext: {
    flexDirection: 'row-reverse',
    backgroundColor: colors.green200,
    height: 60,
  },

  textStyle: {
    color: colors.green100,
    fontWeight: 'bold',
    fontSize: 24,
  },

  textStyleNext: {
    color: colors.grey100,
  },

  icon: {
    position: 'relative',
    top: 3,
    marginRight: 8,
  },
  iconReversed: {
    marginRight: 0,
    marginLeft: 8,
  },
});

interface NavButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  checked?: boolean;
  iconName: 'arrow-left' | 'arrow-right';
  text: 'Back' | 'Next';
  isNext?: boolean;
}

export const NavButton: FC<NavButtonProps> = memo(
  ({ onPress, iconName, text, isNext }) => {
    return (
      <Touchable
        onPress={onPress}
        containerStyle={[styles.container, isNext && styles.containerNext]}
        accessibilityRole="button"
      >
        <Icon
          key="icon"
          style={[styles.icon, isNext && styles.iconReversed]}
          name={iconName}
          size={24}
          color={isNext ? colors.grey100 : colors.green100}
        />
        <Text
          key="text"
          style={[styles.textStyle, isNext && styles.textStyleNext]}
          bold={true}
        >
          {text}
        </Text>
      </Touchable>
    );
  }
);
