import React, { memo, FC } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Platform,
  View,
} from 'react-native';
import { Text } from '../../shared/text';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { colors } from '../../shared/variables/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey100,
    height: 48,
    fontSize: 20,
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  textStyle: {
    color: colors.green100,
    fontWeight: 'bold',
    flex: 1,
  },

  icon: {
    width: 40,
  },
});

interface NavButtonProps {
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  checked?: boolean;
  iconName: 'arrow-left' | 'arrow-right';
  text: 'Back' | 'Next';
  style: any;
}

export const NavButton: FC<NavButtonProps> = memo(
  ({ onPress, iconName, text, style }) => {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          style={[styles.container, style]}
          background={TouchableNativeFeedback.Ripple('#EEE')}
        >
          <View style={styles.icon}>
            <Icon name={iconName} size={24} color={colors.green100} />
          </View>
          <Text style={styles.textStyle}>{text}</Text>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.icon}>
          <Icon name={iconName} size={24} color={colors.green100} />
        </View>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
);
