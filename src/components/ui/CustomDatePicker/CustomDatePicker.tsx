import moment from 'moment';
import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Calendar, Clock } from '@/components/icons';
import { useThemeContext } from '@/context/hooks';

import { Input } from '../Input';
import styles from './CustomDatePicker.styles';
import { Props } from './CustomDatePicker.types';

export const CustomDatePicker: FC<Props> = ({
  control,
  defaultValue,
  name,
  label,
  inputWidth,
  setValue,
  ...props
}) => {
  const { theme, activeTheme } = useThemeContext();
  const style = styles(theme, inputWidth);
  const [open, setOpen] = useState(false);

  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const changeOppositeDate = (currentDate: Date) => {
    const isStartDate = name === 'startDate';
    const fieldName = isStartDate ? 'endDate' : 'startDate';
    const oppositeDate = control._fields[fieldName]?._f.value;
    const momentDate = moment(+currentDate);

    const isSameOrAfterDate = momentDate.isSameOrAfter(
      oppositeDate,
      'hour' && 'minute',
    );
    const isSameOrBeforeDate = momentDate.isSameOrBefore(oppositeDate);

    const addMethod = isStartDate && isSameOrAfterDate && 'add';
    const subtractMethod = !isStartDate && isSameOrBeforeDate && 'subtract';

    const momentMethod = addMethod || subtractMethod;

    if (momentMethod && setValue) {
      const changedOppositeDate = momentDate[momentMethod](15, 'minutes');

      setValue(fieldName, new Date(+changedOppositeDate));
    }
  };

  const onConfirm = (currentDate: Date) => {
    setOpen(false);
    field.onChange(currentDate);

    changeOppositeDate(currentDate);
  };

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
        minuteInterval={15}
        isDarkModeEnabled={activeTheme === 'dark'}
        textColor={theme.TEXT_PRIMARY}
        onConfirm={currentDate => onConfirm(currentDate)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
