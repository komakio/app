import React, { memo } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ModalArrowClose } from '@shared/modal/modal-arrow-close';
import { ProfileType } from '../../profile/type';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SettingProfileStatus = memo(() => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ModalArrowClose />
      <ProfileType />
    </KeyboardAvoidingView>
  );
});
