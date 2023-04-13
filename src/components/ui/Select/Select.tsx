import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { ArrowForward, Repeat } from '@/components/icons';
import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { FREQUENCY_VALUES } from '@/translations';

import styles from './Select.styles';
import { Props } from './Select.types';

export const Select: FC<Props> = ({
  label,
  icon = Repeat,
  items,
  control,
  name,
}) => {
  const { field } = useController({
    control,
    name,
  });
  const Icon = icon;

  const { theme } = useThemeContext();
  const { t } = useTranslation();
  const style = styles(theme);

  const formatFrequencyValue = (value: string) => {
    return t(FREQUENCY_VALUES[value] || 'NEVER');
  };

  return (
    <RNPickerSelect
      value={field.value}
      onValueChange={field.onChange}
      placeholder={{
        label: t('NEVER'),
        value: 'Never',
        color: theme.TEXT.PRIMARY,
      }}
      style={{
        modalViewBottom: {
          backgroundColor: theme.BACKGROUND.INPUT,
        },
        modalViewMiddle: {
          backgroundColor: theme.BACKGROUND.NEUTRAL,
        },
        chevronContainer: { opacity: 0 },
      }}
      items={items}>
      <InputWrapper backgroundColor={theme.BACKGROUND.INPUT}>
        <View style={style.container}>
          <View style={style.row}>
            <Icon color={COLORS.BLUE} />
            <Text style={style.label}>{label}</Text>
          </View>
          <View style={style.row}>
            <Text style={style.input}>
              {formatFrequencyValue(field.value as string)}
            </Text>
            <ArrowForward width={20} height={20} color={theme.ICONS.PRIMARY} />
          </View>
        </View>
      </InputWrapper>
    </RNPickerSelect>
  );
};
