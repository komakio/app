import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../variables/colors';

export const ApprovedIcon = memo(({ style }: { style?: any }) => (
  <Icon name="check-circle" size={24} style={style} color={colors.green100} />
));
