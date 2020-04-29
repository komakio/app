import React, { useState } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { CheckBoxButton, Button } from '@shared/button';
import { useUserStore, useLanguageStore, useProfileFlowStore } from '@stores';
import { TabContainer } from '../common/tab-container';
import { StyleSheet, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { languages } from '@i18n/index';
import { HiddenSelect } from '@shared/select/hidden-select';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  locationButton: {
    marginTop: 20,
    width: 200,
  },
  logoutButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 200,
  },
});

export const AuthenticatedSettings = observer(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const languageStore = useLanguageStore();
  const profileFlowStore = useProfileFlowStore();
  const { profile } = userStore;
  const { t } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState<boolean>();

  return (
    <TabContainer title={t('PROFILE_VIEW_TITLE')}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('setting-profile-status')}
            checked={!!profile?.role}
          >
            {t(`PROFILE_VIEW_STATUS_${profile?.role?.toUpperCase()}`)}
          </CheckBoxButton>
        </View>
        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-name')}
            checked={!!(profile?.firstName && profile?.lastName)}
          >
            {t('PROFILE_VIEW_NAME')}
          </CheckBoxButton>
        </View>

        <View style={styles.buttonContainer}>
          <CheckBoxButton
            onPress={() => navigation.navigate('profile-infos-phone')}
            checked={!!profile?.phone?.number}
          >
            {t('PROFILE_VIEW_PHONE')}
          </CheckBoxButton>
        </View>

        <HiddenSelect
          initialValue={userStore.user?.language}
          open={languageOpen}
          onClose={() => setLanguageOpen(false)}
          onChoose={languageStore.setLanguage}
          items={languages.map((l) => ({ label: l.label, value: l.key }))}
        >
          <View style={styles.buttonContainer}>
            <CheckBoxButton
              onPress={() => setLanguageOpen(true)}
              checked={true}
            >
              {languages.find((l) => l.key === languageStore.language)?.label}
            </CheckBoxButton>
          </View>
        </HiddenSelect>

        {profile?.role === 'helper' && (
          <View style={styles.buttonContainer}>
            <CheckBoxButton
              onPress={() => navigation.navigate('profile-infos-group')}
              checked={!!profile?.group}
            >
              {profile?.group?.name || t('PROFILE_VIEW_GROUP')}
            </CheckBoxButton>
          </View>
        )}
        
        <Button
          size="small"
          style={styles.locationButton}
          onPress={() => profileFlowStore.getGeolocation(navigation)}
        >
          {t('PROFILE_VIEW_LOCATION_UPDATE')}
        </Button>
      
        <Button
          style={styles.logoutButton}
          theme="red"
          size="small"
          onPress={async () => {
            await userStore.logout();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'intro' }],
              })
            );
          }}
        >
          {t('PROFILE_VIEW_LOGOUT')}
        </Button>
      </ScrollView>
    </TabContainer>
  );
});
