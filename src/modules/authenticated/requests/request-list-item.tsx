import React, { FC } from 'react';

import { StyleSheet, View } from 'react-native';
import { useUserStore } from '@stores';
import { observer } from 'mobx-react-lite';
import { colors } from '@shared/variables/colors';
import { Text } from '@shared/text';
import { Request } from '@models/request';
import { useTranslation } from 'react-i18next';
import { RequestActions } from './request-actions';
import moment from 'moment';
import { beautifyDistance } from '@utils/distance';

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
  infos: {
    marginTop: 3,
    color: colors.grey400,
    fontSize: 16,
  },
});

interface RequestListItemProps {
  request: Request;
}

export const RequestListItem: FC<RequestListItemProps> = observer(
  ({ request }) => {
    const { profile } = useUserStore();
    const { t } = useTranslation();

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
    const distance =
      typeof request.acceptorDistance === 'number'
        ? request.acceptorDistance
        : request.candidates?.find((c) => c.profileId === profile?._id)
            ?.distance;

    return (
      <View style={styles.container}>
        <Text bold={true} style={styles.title}>
          {t(`REQUESTS_REQUEST_${request.status.toUpperCase()}`)}
        </Text>
        <Text style={styles.subtitle}>{text}</Text>

        <Text style={styles.infos}>
          {typeof distance === 'number'
            ? `${beautifyDistance(distance)} away - `
            : ''}
          {moment(request.createdAt).fromNow()}
        </Text>
        {/* {request.status === 'accepted' && (
          <Text style={styles.subtitle}>{request.}</Text>
        )} */}
        <RequestActions request={request} />
      </View>
    );
  }
);
