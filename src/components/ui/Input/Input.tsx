import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { CloseCircle } from '@/components/icons';
import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { addAlpha, getValueForDateInput } from '@/utils';

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
  showClearIcon,
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
  const style = styles(showClearIcon, color, multiline);
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

  const isShowClearIcon = showClearIcon && !!value.length;

  const clearInputValue = () => {
    onChange('');
  };

  const { theme } = useThemeContext();

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
          style={style.input}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          multiline={multiline}
          {...props}
        />

        {isShowClearIcon && (
          <TouchableOpacity onPress={clearInputValue}>
            <CloseCircle color={addAlpha(theme.ICONS.PRIMARY, 0.6)} />
          </TouchableOpacity>
        )}
      </InputWrapper>

      {errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
