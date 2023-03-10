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
  borderColor,
  backgroundColor,
  maxLength,
  color = COLORS.BLACK_DARK,
  ...props
}) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
  });
  const style = styles(color);
  // TODO remove nested ternary operator
  const value = isDateTime
    ? field.value
      ? format(new Date(field.value as string), isTime ? 'p' : 'dd MMMM')
      : ''
    : (field.value as string);

  return (
    <View style={style.inputContainer}>
      <InputWrapper
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        errorMessage={errorMessage}
        icon={icon}>
        <TextInput
          placeholderTextColor={COLORS.WHITE_DARK}
          maxLength={maxLength}
          style={style.input}
          value={value}
          onChangeText={field.onChange}
          onBlur={() => {
            field.onBlur();
          }}
          {...props}
        />
      </InputWrapper>

      {errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
