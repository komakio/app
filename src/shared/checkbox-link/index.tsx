import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Text } from '@shared/text';
import { colors } from '@shared/variables/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Touchable } from '@shared/button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15,
  },

  checkBox: {
    width: 32,
    height: 32,
    borderStyle: 'solid',
    borderColor: colors.grey500,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    marginLeft: 8,
    flexWrap: 'wrap',
    flex: 1,
  },
});

interface CheckboxLinkProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  checked?: boolean;
  linkStyle?: StyleProp<TextStyle>;
}

export const CheckboxLink: FC<CheckboxLinkProps> = memo(
  ({ onPress, children, checked, linkStyle }) => {
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
            color={checked ? colors.grey400 : colors.grey200}
          />
        </View>
        <Text style={[styles.text, linkStyle]}>{children}</Text>
      </Touchable>
    );
  }
);
