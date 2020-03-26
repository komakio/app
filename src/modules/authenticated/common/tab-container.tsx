import React, { memo, FC } from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from '../../../shared/text';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 30,
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    width: '100%',
    marginVertical: 30,
  },
});

interface TabContainerProps {
  title: string;
  flex?: boolean;
}

export const TabContainer: FC<TabContainerProps> = memo(
  ({ children, title, flex }) => {
    if (flex) {
      return (
        <View
          style={[
            styles.parentContainer,
            styles.container,
            styles.flexContainer,
          ]}
        >
          <Text style={styles.title} bold={true}>
            {title}
          </Text>

          {children}
        </View>
      );
    }

    return (
      <View style={styles.parentContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title} bold={true}>
            {title}
          </Text>

          {children}
        </ScrollView>
      </View>
    );
  }
);
