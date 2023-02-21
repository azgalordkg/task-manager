import { format } from 'date-fns';
import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './Input.styles';
import { Props } from './Input.types';

export const Input: FC<Props> = ({
  control,
  defaultValue = '',
  name,
  isDateTime,
  isTime,
  icon,
  errorMessage,
  ...props
}) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const value = isDateTime
    ? field.value
      ? format(new Date(field.value as string), isTime ? 'p' : 'dd MMMM')
      : ''
    : (field.value as string);

  return (
    <View style={styles.inputContainer}>
      <InputWrapper errorMessage={errorMessage} icon={icon}>
        <TextInput
          placeholderTextColor={COLORS.PLACEHOLDER}
          style={styles.input}
          value={value}
          onChangeText={field.onChange}
          onBlur={() => {
            field.onBlur();
          }}
          {...props}
        />
      </InputWrapper>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
