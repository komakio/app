import React, { memo, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@shared/variables/colors';
import { Text } from '@shared/text';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.green100,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  badgeSecondary: {
    backgroundColor: colors.grey200,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: colors.grey400,
  },
});

interface BadgeProps {
  theme?: 'green' | 'secondary';
  children: string;
}

export const Badge: FC<BadgeProps> = memo(({ theme = 'green', children }) => {
  return (
    <View
      style={[styles.badge, theme === 'secondary' && styles.badgeSecondary]}
    >
      <Text
        style={[styles.text, theme === 'secondary' && styles.textSecondary]}
      >
        {children}
      </Text>
    </View>
  );
});
