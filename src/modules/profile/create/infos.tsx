import React, { memo, useState } from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  PixelRatio,
  Image,
  Picker,
} from 'react-native';
import { Title, Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { COUNTRIES } from '../../../utils/countries';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#6200ee',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    // color: 'white',
    marginBottom: 50,
  },
  //   actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
});

export const CreateProfileInfo = memo(() => {
  const navigation = useNavigation();
  const [phoneCode, setPhoneCode] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View
      //   colors={['#abecd6', '#fbed96']}
      //   start={{ x: 0.3, y: 0.3 }}
      //   end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View>
        <Picker
          selectedValue={phoneCode}
          style={{ height: 200, width: '100%' }}
          onValueChange={phoneCode => setPhoneCode(phoneCode)}
        >
          {COUNTRIES.map(country => (
            <Picker.Item
              key={country.code}
              label={`${country.name} (${country.dialCode})`}
              value={country.dialCode}
            />
          ))}
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <TextInput
        label="Phone"
        value={phone}
        autoCompleteType="tel"
        keyboardType="number-pad"
        onChangeText={text => setPhone(text)}
      />
    </View>
  );
});
