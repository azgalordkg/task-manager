import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import {Props} from './Input.types';
import {useController} from 'react-hook-form';
import styles from './Input.styles';
import {COLORS} from '../../../constants';
import {format} from 'date-fns';

export const Input: FC<Props> = ({
  control,
  defaultValue = '',
  name,
  isDateTime,
  Icon,
  ...props
}) => {
  const {field} = useController({
    control,
    defaultValue,
    name,
  });

  const value = isDateTime
    ? field.value
      ? format(new Date(field.value), 'dd MMMM')
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
