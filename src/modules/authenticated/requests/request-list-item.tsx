import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { useUserStore } from '../../../stores';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native-animatable';
import { colors } from '../../../shared/variables/colors';
import { Text } from '../../../shared/text';
import { Request } from '../../../models/request';
import { useTranslation } from 'react-i18next';
import { RequestActions } from './request-actions';
import { Touchable } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';

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
    const { profile } = useUserStore();
    const { t } = useTranslation();
    const navigation = useNavigation();

    let text = '';

    if (request.status === 'pending') {
      text =
        request.requesterProfileId === profile?._id
          ? t('REQUESTS_REQUEST_PENDING_DETAILS_HELPER')
          : t('REQUESTS_REQUEST_PENDING_DETAILS_NEEDER', {
              name: request.requesterShortName,
            });
    }
    if (request.status === 'accepted') {
      text =
        request.requesterProfileId === profile?._id
          ? t('REQUESTS_REQUEST_ACCEPTED_DETAILS_HELPER', {
              name: request.acceptorShortName,
            })
          : t('REQUESTS_REQUEST_ACCEPTED_DETAILS_NEEDER', {
              name: request.requesterShortName,
            });
    }
    if (request.status === 'canceled') {
      text = t('REQUESTS_REQUEST_CANCELED_DETAILS');
    }

    if (request.status === 'accepted') {
      return (
        <Touchable
          onPress={() =>
            navigation.navigate('requests-request-accepted', request)
          }
          accessibilityRole="button"
          containerStyle={styles.container}
        >
          <Text bold={true} style={styles.title}>
            {t(`REQUESTS_REQUEST_${request.status.toUpperCase()}`)}
          </Text>
          <Text style={styles.subtitle}>{text}</Text>
        </Touchable>
      );
    }

    return (
      <View style={styles.container}>
        <Text bold={true} style={styles.title}>
          {t(`REQUESTS_REQUEST_${request.status.toUpperCase()}`)}
        </Text>
        <Text style={styles.subtitle}>{text}</Text>
        <RequestActions request={request} />
      </View>
    );
  }
);
