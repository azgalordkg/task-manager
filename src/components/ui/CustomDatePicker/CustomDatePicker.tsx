import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { useThemeContext } from '@/context/hooks';

import { Calendar, Clock } from '../../icons';
import { Input } from '../Input';
import styles from './CustomDatePicker.styles';
import { Props } from './CustomDatePicker.types';

export const CustomDatePicker: FC<Props> = ({
  control,
  defaultValue,
  name,
  label,
  inputWidth,
  ...props
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme, inputWidth);
  const [open, setOpen] = useState(false);

  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <>
      <View style={style.container}>
        {label && <Text style={style.label}>{label}</Text>}
        <View>
          <TouchableOpacity
            style={style.button}
            onPress={() => setOpen(true)}
          />
          <Input
            color={theme.TEXT_PRIMARY}
            editable={false}
            isDateTime
            isTime={props.mode === 'time'}
            backgroundColor={theme.INPUT_DEFAULT}
            borderColor={theme.INPUT_DEFAULT}
            control={control}
            name={name}
            icon={props.mode === 'time' ? Clock : Calendar}
          />
        </View>
      </View>
      <DateTimePickerModal
        {...props}
        isVisible={open}
        date={field.value as Date}
        minuteInterval={30}
        onConfirm={currentDate => {
          setOpen(false);
          field.onChange(currentDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
