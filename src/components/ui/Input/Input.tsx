import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';
import { formatDate } from '@/utils';

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
  const dateFormat = isTime ? 'LT' : 'DD MMMM';
  const formattedValue = formatDate(field.value, dateFormat);

  const value = isDateTime
    ? field.value
      ? formattedValue
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
          placeholderTextColor={COLORS.GREY_LIGHT}
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
