import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { Touchable } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';
import { useUserStore } from '../../../stores';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native-animatable';
import { colors } from '../../../shared/variables/colors';
import { Text } from '../../../shared/text';
import { Request } from '../../../models/request';
import { StringUtils } from '../../../utils/strings';

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

    let text = '';

    if (request.status === 'pending') {
      text =
        profile.role === 'needer'
          ? 'You have requested some help'
          : `${request.requesterShortName} has requested some help`;
    }
    if (request.status === 'accepted') {
      text =
        profile.role === 'needer'
          ? `${request.acceptorShortName} has agreed to help you.`
          : `You agreed to help ${request.requesterShortName}`;
    }

    return (
      <View>
        <Touchable
          onPress={() =>
            navigation.navigate(`requests-request-${request.status}`, request)
          }
          containerStyle={styles.container}
          // checked={false}
        >
          <Text bold={true} style={styles.title}>
            {StringUtils.capitalizeFirstLetter(request.status)} request
          </Text>
          <Text style={styles.subtitle}>{text}</Text>
        </Touchable>
      </View>
    );
  }
);
