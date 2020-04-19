import React, { useRef, memo, FC, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { languages } from '@i18n/index';
import PickerSelect from 'react-native-picker-select';
import { useLanguageStore } from '@stores';

const styles = StyleSheet.create({
  input: {
    display: 'none',
  },
});

interface HiddenSelectProps {
  open: boolean;
  onClose: () => void;
  items: PickerSelect['props']['items'];
  initialValue: string;
}

export const HiddenSelect: FC<HiddenSelectProps> = memo(
  ({ open, onClose, initialValue, items }) => {
    const pickerSelectRef = useRef<PickerSelect>();
    const languageStore = useLanguageStore();
    const { t } = useTranslation();
    const [value, setValue] = useState<string>(initialValue);

    useEffect(() => {
      if (open && pickerSelectRef) {
        const state: any = pickerSelectRef.current.state;
        state.showPicker = true;
        state.animationType = 'slide';
        pickerSelectRef.current.forceUpdate();
      }
    }, [open]);

    return (
      <PickerSelect
        ref={pickerSelectRef}
        value={value}
        style={{
          inputIOS: styles.input,
          //   inputAndroid: styles.input,
        }}
        // useNativeAndroidPickerStyle={false}
        placeholder={{}}
        doneText={t('ACTIONS_DONE')}
        onDonePress={() => languageStore.setLanguage(value)}
        onClose={onClose}
        onValueChange={setValue}
        items={items.map((i) => ({ ...i, key: i.value }))}
      />
    );
  }
);
