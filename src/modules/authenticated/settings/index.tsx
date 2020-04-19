import React, { useState } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { CheckBoxButton, Button } from '@shared/button';
import { useUserStore } from '@stores';
import { TabContainer } from '../common/tab-container';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { languages } from '@i18n/index';
import { HiddenSelect } from '@shared/select/hidden-select';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  logoutButton: {
    marginTop: 40,
    marginBottom: 20,
  },
});

export const AuthenticatedSettings = observer(() => {
  const navigation = useNavigation();
  const userStore = useUserStore();
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
            {t(`PROFILE_VIEW_STATUS_${profile?.role.toUpperCase()}`)}
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

        {Platform.OS === 'ios' && (
          <View style={styles.buttonContainer}>
            <CheckBoxButton
              onPress={() => setLanguageOpen(true)}
              checked={true}
            >
              {languages.find((l) => l.key === userStore.user.language)?.label}
            </CheckBoxButton>
          </View>
        )}

        {Platform.OS === 'ios' && (
          <HiddenSelect
            initialValue={userStore.user.language}
            open={languageOpen}
            onClose={() => setLanguageOpen(false)}
            items={languages.map((l) => ({ label: l.label, value: l.key }))}
          />
        )}

        {/* {profile?.role === 'needer' && (
          <View style={styles.buttonContainer}>
            <CheckBoxButton
              onPress={() => navigation.navigate('profile-infos-address')}
              checked={!!profile?.address?.raw}
            >
              {t('PROFILE_VIEW_ADDRESS')}
            </CheckBoxButton>
          </View>
        )} */}

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
