import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { ArrowAngle, Repeat } from '@/components/icons';
import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

import styles from './Select.styles';
import { Props } from './Select.types';

export const Select: FC<Props> = ({
  label,
  icon = Repeat,
  items,
  control,
  name,
  // setValue,
}) => {
  const { field } = useController({
    control,
    name,
  });
  const Icon = icon;

  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <RNPickerSelect
      value={field.value}
      onValueChange={field.onChange}
      placeholder={{
        label: 'Never',
        value: 'Never',
        color: theme.TEXT_PRIMARY,
      }}
      style={{
        modalViewBottom: { backgroundColor: theme.BACKGROUND_MODAL },
        modalViewMiddle: { backgroundColor: theme.BACKGROUND_TASK },
      }}
      // onUpArrow={() => {
      //   const currentIndex = items.findIndex(
      //     item => item.value === field.value,
      //   );
      //
      //   if (currentIndex > 0) {
      //     const previousItem = items[currentIndex - 1];
      //     setValue('repeat', previousItem.value);
      //   }
      // }}
      items={items}>
      <InputWrapper
        backgroundColor={theme.INPUT_DEFAULT}
        borderColor={theme.INPUT_DEFAULT}>
        <View style={style.container}>
          <View style={style.row}>
            <Icon />
            <Text style={style.label}>{label}</Text>
          </View>
          <View style={style.row}>
            <Text style={style.input}>{field.value as string}</Text>
            <ArrowAngle color={COLORS.GREY_LIGHT} />
          </View>
        </View>
      </InputWrapper>
    </RNPickerSelect>
  );
};
