import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../variables/theme';

export const ApprovedIcon = memo(() => (
  <Icon name="check-circle" size={24} color={colors.green} />
));
