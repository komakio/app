import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
} from 'react-native';
import { Text } from '../text';
import { colors } from '../variables/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Touchable } from './touchable';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    fontSize: 20,
    alignItems: 'center',
    paddingVertical: 15,
  },

  textStyle: {
    flex: 6,
    fontSize: 20,
    marginLeft: 16,
  },

  checkBox: {
    width: 48,
    height: 48,
    borderStyle: 'solid',
    borderColor: colors.grey500,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface CheckboxFormElementProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  checked?: boolean;
}

export const CheckboxFormElement: FC<CheckboxFormElementProps> = memo(
  ({ onPress, children, checked }) => {
    return (
      <Touchable
        onPress={onPress}
        containerStyle={styles.container}
        accessibilityRole="checkbox"
      >
        <View style={styles.checkBox}>
          <Icon
            name="check"
            size={24}
            color={checked ? colors.grey400 : colors.grey300}
          />
        </View>
        <Text style={styles.textStyle}>{children}</Text>
      </Touchable>
    );
  }
);
