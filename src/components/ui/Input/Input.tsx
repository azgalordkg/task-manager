import { format } from 'date-fns';
import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { TextInput, View } from 'react-native';

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
  ...props
}) => {
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
    <View style={styles.wrapper}>
      {Icon && <View style={styles.icon}>{Icon}</View>}
      <TextInput
        placeholderTextColor={COLORS.GREY}
        style={styles.input}
        value={value}
        onChangeText={field.onChange}
        {...props}
      />
    </View>
  );
};
