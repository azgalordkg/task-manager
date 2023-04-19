import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Calendar, TimeCircle } from '@/components/icons';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { TimeFormat } from '@/types';
import { getUserTimeFormat } from '@/utils';

import { Input } from '../Input';
import styles from './CustomDatePicker.styles';
import { Props } from './CustomDatePicker.types';

export const CustomDatePicker: FC<Props> = ({
  control,
  defaultValue,
  name,
  inputWidth,
  placeholder,
  ...props
}) => {
  const [timeFormat, setTimeFormat] = useState<TimeFormat>({
    format: 'LT',
    locale: 'en_US',
  });
  const { theme, isDark } = useThemeContext();
  const style = styles(theme, inputWidth);
  const [open, setOpen] = useState(false);
  const maxDate = moment().add(2, 'years').endOf('year');

  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const onConfirm = (currentDate: Date) => {
    setOpen(false);
    field.onChange(currentDate);
  };

  useEffect(() => {
    if (props.mode === 'time') {
      getUserTimeFormat().then(format => {
        setTimeFormat(format);
      });
    }
  }, [props.mode]);

  return (
    <>
      <View style={style.container}>
        <View>
          <TouchableOpacity
            style={style.button}
            onPress={() => setOpen(true)}
          />
          <Input
            placeholder={placeholder}
            color={theme.TEXT.PRIMARY}
            editable={false}
            isDateTime
            timeFormat={timeFormat.format}
            isTime={props.mode === 'time'}
            backgroundColor={theme.INPUTS.PRIMARY}
            control={control}
            name={name}
            icon={
              props.mode === 'time' ? (
                <TimeCircle color={COLORS.BLUE} />
              ) : (
                <Calendar color={COLORS.GREEN} />
              )
            }
          />
        </View>
      </View>
      <DateTimePickerModal
        {...props}
        locale={timeFormat.locale}
        isVisible={open}
        date={(field.value as Date) || new Date()}
        minuteInterval={10}
        isDarkModeEnabled={isDark}
        textColor={theme.TEXT.PRIMARY}
        maximumDate={maxDate.toDate()}
        onConfirm={currentDate => onConfirm(currentDate)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
