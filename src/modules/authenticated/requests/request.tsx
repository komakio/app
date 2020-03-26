import React from 'react';

import { StyleSheet } from 'react-native';
import { TabContainer } from '../common/tab-container';
import { Button, CheckBoxButton, Touchable } from '../../../shared/button';
import { useNavigation } from '@react-navigation/native';
import { EmptyBox } from '../common/empty-box';
import { ShareButton } from '../../../shared/button/share-button';
import { useUserStore, useRequestsStore } from '../../../stores';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native-animatable';
import { colors } from '../../../shared/variables/colors';
import { Text } from '../../../shared/text';

const styles = StyleSheet.create({
  button: {
    marginVertical: 40,
  },
});

export const Request = observer(() => {
  const navigation = useNavigation();
  const { profile } = useUserStore();
  const requestsStore = useRequestsStore();

  const requestHelp = async () => {
    await requestsStore.createRequest();
    console.log('yo');
  };

  return (
    <View>
      <Touchable
        onPress={() => {
          console.log('plouf');
        }}
        containerStyle={{
          borderRadius: 5,
          backgroundColor: colors.grey200,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
        // checked={false}
      >
        <Text>qwdqw</Text>
      </Touchable>
    </View>
  );
});
