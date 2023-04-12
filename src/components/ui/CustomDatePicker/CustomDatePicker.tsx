import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Calendar, TimeCircle } from '@/components/icons';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

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
  const { theme, activeTheme } = useThemeContext();
  const style = styles(theme, inputWidth);
  const [open, setOpen] = useState(false);

  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const onConfirm = (currentDate: Date) => {
    setOpen(false);
    field.onChange(currentDate);
  };

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
            color={theme.TEXT_PRIMARY}
            editable={false}
            isDateTime
            isTime={props.mode === 'time'}
            backgroundColor={theme.INPUT_DEFAULT}
            borderColor={theme.INPUT_DEFAULT}
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
        isVisible={open}
        date={(field.value as Date) || new Date()}
        minuteInterval={10}
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
