import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { observer } from 'mobx-react-lite';
import { Text } from '../../../shared/text';
import { ModalArrowClose } from '../../../shared/modal/modal-arrow-close';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export const CanceledRequestView = observer(() => {
  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <View>
        <Text style={styles.title}>
          {t('REQUESTS_REQUEST_CANCELED_DETAILS')}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
});
