import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { Touchable } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';
import { useUserStore, useRequestsStore } from '../../../stores';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native-animatable';
import { colors } from '../../../shared/variables/colors';
import { Text } from '../../../shared/text';
import { Request } from '../../../models/request';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.grey200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
  },
});

interface RequestListItemProps {
  request: Request;
}

export const RequestListItem: FC<RequestListItemProps> = observer(
  ({ request }) => {
    const navigation = useNavigation();
    const { profile } = useUserStore();
    const requestsStore = useRequestsStore();

    const text =
      profile.role === 'needer'
        ? 'You have requested some help'
        : `${request.requesterProfileId} has requested some help`;

    return (
      <View>
        <Touchable
          onPress={() => navigation.navigate('requests-request-view', request)}
          containerStyle={styles.container}
          // checked={false}
        >
          <Text bold={true} style={styles.title}>
            Pending request
          </Text>
          <Text style={styles.subtitle}>{text}</Text>
        </Touchable>
      </View>
    );
  }
);
