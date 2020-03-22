import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    margin: 5,
  },

  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'black',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

interface IconWithBadgeProps {
  name: string;
  badgeCount: number;
  color: string;
  size: number;
}

export const IconWithBadge: FC<IconWithBadgeProps> = ({
  name,
  badgeCount,
  color,
  size,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};
