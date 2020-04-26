import React, { useRef, memo, FC, useEffect, useState } from 'react';
import { StyleSheet, Platform, View, Picker as RNPicker } from 'react-native';
import { useTranslation } from 'react-i18next';
import PickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  input: {
    display: 'none',
  },
  androidHiddenPicker: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    opacity: 0,
  },
});

interface HiddenSelectProps {
  open: boolean;
  onClose: () => void;
  onChoose: (value: string) => void;
  items: PickerSelect['props']['items'];
  initialValue?: string;
}

export const HiddenSelect: FC<HiddenSelectProps> = memo(
  ({ open, onClose, initialValue, items, children, onChoose }) => {
    const pickerSelectRef = useRef<PickerSelect>();
    const { t } = useTranslation();
    const [value, setValue] = useState<string>(initialValue);

    useEffect(() => {
      if (Platform.OS === 'android') {
        return;
      }
      if (open && pickerSelectRef) {
        const state: any = pickerSelectRef.current.state;
        state.showPicker = true;
        state.animationType = 'slide';
        pickerSelectRef.current.forceUpdate();
      }
    }, [open]);

    if (Platform.OS === 'android') {
      return (
        <View>
          {children}
          <RNPicker
            style={styles.androidHiddenPicker}
            selectedValue={value}
            onValueChange={onChoose}
          >
            {items.map((item) => (
              <RNPicker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </RNPicker>
        </View>
      );
    }

    return (
      <>
        {children}
        <PickerSelect
          ref={pickerSelectRef}
          value={value}
          style={{
            inputIOS: styles.input,
          }}
          placeholder={{}}
          doneText={t('ACTIONS_DONE')}
          onDonePress={() => onChoose(value)}
          onClose={onClose}
          onValueChange={setValue}
          items={items.map((i) => ({ ...i, key: i.value }))}
        />
      </>
    );
  }
);
