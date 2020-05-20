import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Text } from '@shared/text';
import { useNetworkStore } from '@stores/index';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100000,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export const NotLoggedIn: FC = observer(() => {
  const networkStore = useNetworkStore();
  const { t } = useTranslation();

  if (networkStore.isConnected) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('NO_NETWORK')}</Text>
    </View>
  );
});
