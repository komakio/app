import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../variables/colors';
import { StyleProp, ViewStyle } from 'react-native';

export const ApprovedIcon = memo(
  ({ style }: { style?: StyleProp<ViewStyle> }) => (
    <Icon name="check-circle" size={24} style={style} color={colors.green100} />
  )
);
