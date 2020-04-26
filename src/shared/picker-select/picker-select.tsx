import React, { memo, FC } from 'react';
import { View, ViewStyle, Platform } from 'react-native';
import { Text } from '@shared/text';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import { styles as textInputStyles } from '../text-input';

interface TextInputProps extends PickerSelectProps {
  label?: string;
  containerStyle?: ViewStyle;
}

export const PickerSelect: FC<TextInputProps> = memo(
  ({ label, containerStyle, ...props }) => (
    <View style={[textInputStyles.container, containerStyle]}>
      {label && (
        <Text bold={true} style={textInputStyles.label}>
          {label}
        </Text>
      )}
      <RNPickerSelect
        style={{
          inputAndroid: textInputStyles.input,
          viewContainer:
            Platform.OS === 'android'
              ? {
                  ...textInputStyles.input,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }
              : null,
          inputIOS: textInputStyles.input,
        }}
        {...props}
      />
    </View>
  )
);
