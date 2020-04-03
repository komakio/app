import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
} from 'react-native';
import { Text } from '@shared/text';
import { colors } from '@shared/variables/colors';
import { ApprovedIcon } from '@shared/approved-icon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Touchable } from './touchable';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey200,
    borderRadius: 8,
    flexDirection: 'row',
    fontSize: 20,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },

  textStyle: {
    flex: 6,
    fontSize: 18,
  },

  iconContainer: {
    flex: 1,
  },
});

interface CheckboxButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  checked?: boolean;
}

export const CheckBoxButton: FC<CheckboxButtonProps> = memo(
  ({ onPress, children, checked }) => {
    return (
      <Touchable
        onPress={onPress}
        containerStyle={styles.container}
        accessibilityRole="checkbox"
      >
        <View style={styles.iconContainer}>
          {checked && <ApprovedIcon />}
          {!checked && <Icon name="checkbox-blank-circle-outline" size={24} />}
        </View>
        <Text style={styles.textStyle} bold={true}>
          {children}
        </Text>
      </Touchable>
    );
  }
);
