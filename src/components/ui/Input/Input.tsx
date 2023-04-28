import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Show } from '@/components/icons';
import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
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
  timeFormat = 'LT',
  errorMessage,
  borderColor,
  backgroundColor,
  maxLength,
  color = COLORS.BLACK_DARK,
  multiline,
  borderRadius,
  isSecureInput,
  ...props
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    field: { value: fieldValue, onChange, onBlur },
  } = useController({
    control,
    defaultValue,
    name,
  });
  const { theme } = useThemeContext();

  const style = styles(color, multiline);
  const dateFormat = isTime ? timeFormat : 'DD MMMM';

  const formattedValue =
    isDateTime &&
    (getValueForDateInput(
      fieldValue as Date,
      t,
      dateFormat,
      isTime,
      language,
    ) as string);
  const value = fieldValue && (formattedValue || (fieldValue as string));

  const [isHideValue, serIsHideValue] = useState(isSecureInput);

  const iconType = isHideValue && isSecureInput ? 'show' : 'hide';

  const handleShowValue = () => {
    serIsHideValue(!isHideValue);
  };

  return (
    <View style={style.inputContainer}>
      <InputWrapper
        borderRadius={borderRadius}
        multiline={multiline}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        errorMessage={errorMessage}
        icon={icon}>
        <TextInput
          placeholderTextColor={COLORS.GREY_LIGHT}
          maxLength={maxLength}
          secureTextEntry={isHideValue}
          style={style.input}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          multiline={multiline}
          {...props}
        />

        {isSecureInput && (
          <TouchableOpacity onPress={handleShowValue}>
            <Show color={theme.ICONS.SECONDARY} type={iconType} />
          </TouchableOpacity>
        )}
      </InputWrapper>

      {errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
