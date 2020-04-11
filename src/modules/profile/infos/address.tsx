import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  PixelRatio,
  ActivityIndicator,
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from '@shared/text';
import { TextInput } from '@shared/text-input';
import { useProfileFlowStore, useUserStore } from '@stores';
import { Button, Touchable } from '@shared/button';
import { ModalArrowClose } from '@shared/modal/modal-arrow-close';
import { Profile } from '@models/profile';
import { useTranslation } from 'react-i18next';
import { LocationApi, GeolocationResult } from '@api/location';
import { makeCancelable, CancelablePromise } from '@utils/promise';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  results: {
    borderColor: 'black',
    width: '100%',
    display: 'flex',
    flex: 1,
    marginHorizontal: 20,
  },
  result: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'black',
  },
  resultText: {
    fontSize: 16,
  },
});

export const ProfileInfosAddress = observer(() => {
  const { params } = useRoute<
    RouteProp<
      { latLongRequired: { latLongRequired: boolean } },
      'latLongRequired'
    >
  >();
  const navigation = useNavigation();
  const profileFlowStore = useProfileFlowStore();
  const userStore = useUserStore();
  const { t } = useTranslation();
  const timeout = useRef<number>();
  const cancellablePromise = useRef<CancelablePromise<GeolocationResult[]>>();
  const [results, setResults] = useState<GeolocationResult[]>();
  const [searchStatus, setSearchStatus] = useState<'loading' | 'no-results'>();

  const { profile } = userStore;
  const [rawAddress, setRawAddress] = useState<Profile['address']['raw']>(
    profile?.address?.raw || profileFlowStore.address || ''
  );
  const [addressExtra, setAddressExtra] = useState<Profile['address']['extra']>(
    profile?.address?.extra || profileFlowStore.addressExtra || ''
  );

  const onChooseResult = (result: GeolocationResult) => () => {
    setResults(null);
    setRawAddress(result.label);
    profileFlowStore.address = result.label;
    profileFlowStore.coords = [result.longitude, result.latitude];
  };

  const onPress = () => {
    if (userStore.profile?._id) {
      userStore.patchProfile(userStore.profile._id, {
        address: {
          ...profile.address,
          raw: rawAddress,
          extra: addressExtra,
        },
      });
    } else {
      profileFlowStore.address = rawAddress;
    }
    navigation.goBack();
  };

  const onChangeAddress = async (rawAddressChanged: string) => {
    setRawAddress(rawAddressChanged);
    setResults(null);
    setSearchStatus(null);

    clearTimeout(timeout.current);
    timeout.current = setTimeout(async () => {
      setSearchStatus('loading');
      if (cancellablePromise.current) {
        cancellablePromise.current.cancel();
      }
      if (!rawAddressChanged) {
        return;
      }
      try {
        cancellablePromise.current = makeCancelable(
          LocationApi.autocomplete(
            userStore.accessToken?.token,
            rawAddressChanged
          )
        );
        const res = await cancellablePromise.current.promise;
        setSearchStatus(null);
        setResults(res);
        if (res.length === 0) {
          setSearchStatus('no-results');
        }
      } catch (e) {
        setSearchStatus(null);
        if (e.message !== 'OLD_PROMISE_CANCELLED') {
          throw e;
        }
      }
    }, 500);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />

      <Text style={styles.title}>{t('PROFILE_ADDRESS_TITLE')}</Text>

      <TextInput
        label={t('PROFILE_ADDRESS_ADDRESS')}
        value={rawAddress}
        onChangeText={onChangeAddress}
        autoCorrect={false}
      />

      {results?.length ? (
        <View style={styles.results}>
          {results.map((result) => (
            <Touchable
              accessibilityRole="text"
              onPress={onChooseResult(result)}
              containerStyle={styles.result}
              key={result.label}
            >
              <Text style={styles.resultText}>{result.label}</Text>
            </Touchable>
          ))}
        </View>
      ) : null}

      {searchStatus === 'loading' && (
        <ActivityIndicator size="large" color="#000000" />
      )}
      {searchStatus === 'no-results' && (
        <Text style={styles.resultText}>{t('NO_RESULTS')}</Text>
      )}

      {/* <TextInput
        label={t('PROFILE_ADDRESS_EXTRA')}
        value={addressExtra}
        onChangeText={(extra) => setAddressExtra(extra)}
        autoCorrect={false}
      /> */}

      {(!params?.latLongRequired || profileFlowStore.coords) && (
        <View style={styles.buttonContainer}>
          <Button onPress={onPress}>{t('ACTIONS_DONE')}</Button>
        </View>
      )}
    </KeyboardAvoidingView>
  );
});
