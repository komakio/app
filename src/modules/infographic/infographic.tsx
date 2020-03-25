import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../shared/text';
import { observer } from 'mobx-react-lite';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBoxButton } from '../../shared/button/checkbox-button';
import { BottomNavbar } from '../nav-bar/nav-bar';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 16,
  },
  description: {
    fontSize: 20,
    marginBottom: 22,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});

export const Infographic = observer(() => {
  const navigation = useNavigation();

  const goToAuthenticated = () => navigation.navigate('authenticated');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          source={require('../../images/volunteers.png')}
        />
      </ScrollView>
      <BottomNavbar onBack={navigation.goBack} onNext={goToAuthenticated} />
    </View>
  );
});
