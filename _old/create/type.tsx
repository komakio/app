import React, { memo, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  PixelRatio,
  Image,
} from 'react-native';
import { Title, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Subheading } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6200ee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    // color: 'white',
    marginBottom: 50,
  },
  //   actionButtonRow: { flexDirection: 'row', marginBottom: 20 },
});

export const CreateProfileType = memo(() => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#abecd6', '#fbed96']}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      {/* <StatusBar barStyle="light-content" backgroundColor="red" /> */}
      {/* <Title style={styles.title}>Choose your type of account</Title> */}
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: 200, height: 130 }}
          source={require('../../../images/sick.png')}
        />
        <Title>I'm in need</Title>
        <Subheading>Don't worry ! We'll find you someone</Subheading>
        <Button
          style={{ marginTop: 10 }}
          mode="contained"
          onPress={() => navigation.navigate('CreateProfile-Infos')}
        >
          Go
        </Button>
      </View>

      <View
        style={[
          {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          {
            borderTopColor: 'black',
            borderTopWidth: 1 / PixelRatio.get(),
          },
        ]}
      >
        <Image
          style={{ width: 200, height: 130 }}
          source={require('../../../images/people.png')}
        />
        <Title>I want to help</Title>
        <Subheading>You're the best !</Subheading>
        <Button style={{ marginTop: 10 }} mode="contained">
          Go
        </Button>
      </View>

      {/* <View
        style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
      > */}
      {/* <View
        style={{
          height: 200,
          width: '65%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: 5,
          marginBottom: 20,
          marginLeft: '20%',
        }}
      >
        <Text style={{ color: 'white' }}>I'm in need</Text>
        <Button
          style={{ marginHorizontal: 20 }}
          onPress={() => navigation.navigate('CreateProfile-2')}
          mode="contained"
        >
          Yo
        </Button>
      </View>
      <View
        style={{
          height: 200,
          width: '65%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: 5,
          marginLeft: '20%',
        }}
      /> */}
      {/* </View> */}
      {/* </View> */}
    </LinearGradient>
  );
});
