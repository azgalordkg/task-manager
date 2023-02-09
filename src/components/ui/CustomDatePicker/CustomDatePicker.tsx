import React, { FC } from 'react';
import { useState } from 'react';
import { useController } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { Calendar } from '../../icons';
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
  const [open, setOpen] = useState(false);

  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <>
      <View style={{ width: inputWidth || 'auto' }}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setOpen(true)}
          />
          <Input
            editable={false}
            isDateTime
            isTime={props.mode === 'time'}
            control={control}
            name={name}
            Icon={<Calendar />}
          />
        </View>
      </View>
      <DatePicker
        {...props}
        modal
        open={open}
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
