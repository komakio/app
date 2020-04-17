import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useCodepushStore } from '../stores';
import { observer } from 'mobx-react-lite';
import { Text } from '@shared/text';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 25,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
});

export const CodePushProgress = observer(() => {
  const codePushStore = useCodepushStore();
  const { t } = useTranslation();

  if (typeof codePushStore.downloadProgress !== 'number') {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t('CODEPUSH_DOWNLOADING')} ({codePushStore.downloadProgress}%)
      </Text>
    </View>
  );
});
