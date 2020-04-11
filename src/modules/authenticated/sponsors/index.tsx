import React, { memo } from 'react';

import { StyleSheet, View, Linking, Image } from 'react-native';
import { Text } from '@shared/text';
import { Button } from '@shared/button';
import { TabContainer } from '../common/tab-container';
import { colors } from '@shared/variables/colors';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.grey200,
    borderRadius: 10,
    width: '100%',
    padding: 30,
    marginBottom: 20,
  },
  boxCenter: {
    alignItems: 'center',
  },
  reachOutText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export const AuthenticatedSponsors = memo(() => {
  //   const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <TabContainer title={t('SPONSORS_TITLE')}>
      <View style={styles.box}>
        <Text>{t('SPONSORS_HOSTING')}</Text>
        <Image
          style={{ width: '80%', height: 100, resizeMode: 'contain' }}
          source={require('@images/sponsors/oceanio.png')}
        />
      </View>

      <View style={[styles.box, styles.boxCenter]}>
        <Text style={styles.reachOutText}>{t('SPONSORS_REACH_OUT')}</Text>
        <Button
          theme="green"
          onPress={() => Linking.openURL('https://komak.io/contact/')}
        >
          {t('SPONSORS_REACH_OUT_CTA')}
        </Button>
      </View>
    </TabContainer>
  );
});
