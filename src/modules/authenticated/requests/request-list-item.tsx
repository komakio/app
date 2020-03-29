import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { Touchable, Button } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';
import { useUserStore } from '../../../stores';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native-animatable';
import { colors } from '../../../shared/variables/colors';
import { Text } from '../../../shared/text';
import { Request } from '../../../models/request';
import { StringUtils } from '../../../utils/strings';
import { useTranslation } from 'react-i18next';

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

    return (
      <View>
        <Touchable
          onPress={() =>
            navigation.navigate(`requests-request-${request.status}`, request)
          }
          containerStyle={styles.container}
          accessibilityRole="button"
          // checked={false}
        >
          <Text bold={true} style={styles.title}>
            {t(`REQUESTS_REQUEST_${request.status.toUpperCase()}`)}
          </Text>
          <Text style={styles.subtitle}>{text}</Text>
        </Touchable>
      </View>
    );
  }
);
