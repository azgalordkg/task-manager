import { format } from 'date-fns';
import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './Input.styles';
import { Props } from './Input.types';

export const Input: FC<Props> = ({
  control,
  defaultValue = '',
  name,
  isDateTime,
  isTime,
  Icon,
  errorMessage,
  ...props
}) => {
  const style = styles(errorMessage);
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const value = isDateTime
    ? field.value
      ? format(new Date(field.value), isTime ? 'p' : 'dd MMMM')
      : ''
    : (field.value as string);

  return (
    <View style={style.inputContainer}>
      <View style={style.wrapper}>
        {Icon && <View style={style.icon}>{Icon}</View>}
        <TextInput
          placeholderTextColor={COLORS.PLACEHOLDER}
          style={style.input}
          value={value}
          onChangeText={field.onChange}
          onBlur={() => {
            field.onBlur();
          }}
          {...props}
        />
      </View>

      {errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
