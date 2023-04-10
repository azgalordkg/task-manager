import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, View } from 'react-native';

import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';
import { getValueForDateInput } from '@/utils';

import styles from './Input.styles';
import { Props } from './Input.types';

export const Input: FC<Props> = ({
  control,
  defaultValue = '',
  name,
  isDateTime,
  isTime,
  icon,
  iconColor,
  errorMessage,
  borderColor,
  backgroundColor,
  maxLength,
  color = COLORS.BLACK_DARK,
  multiline,
  ...props
}) => {
  const { t } = useTranslation();
  const {
    field: { value: fieldValue, onChange, onBlur },
  } = useController({
    control,
    defaultValue,
    name,
  });
  const style = styles(color, multiline);
  const dateFormat = isTime ? 'LT' : 'DD MMMM';

  const formattedValue =
    isDateTime &&
    (getValueForDateInput(fieldValue as Date, t, dateFormat, isTime) as string);
  const value = fieldValue && (formattedValue || (fieldValue as string));

  return (
    <View style={style.inputContainer}>
      <InputWrapper
        multiline={multiline}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        errorMessage={errorMessage}
        icon={icon}
        iconColor={iconColor}>
        <TextInput
          placeholderTextColor={COLORS.GREY_LIGHT}
          maxLength={maxLength}
          style={style.input}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          multiline={multiline}
          {...props}
        />
      </InputWrapper>

      {errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
