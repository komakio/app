import React, { memo } from 'react';

import { StyleSheet, View, Linking } from 'react-native';
import { Text } from '../../../shared/text';
import { Button } from '../../../shared/button';
import { Image } from 'react-native-animatable';
import { TabContainer } from '../common/tab-container';
import { colors } from '../../../shared/variables/colors';

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

  return (
    <TabContainer title="Sponsors">
      <View style={styles.box}>
        <Text>Hosting</Text>
        <Image
          style={{ width: '80%', height: 100, resizeMode: 'contain' }}
          source={require('../../../images/sponsors/oceanio.png')}
        />
      </View>

      <View style={[styles.box, styles.boxCenter]}>
        <Text style={styles.reachOutText}>
          Reach out if your company can help.
        </Text>
        <Button
          size="big"
          theme="green"
          onPress={() => Linking.openURL('https://komak.io/contact/')}
        >
          Help out
        </Button>
      </View>
    </TabContainer>
  );
});
