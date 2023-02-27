import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { ArrowAngle, Repeat } from '@/components/icons';
import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';

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
  return (
    <RNPickerSelect
      value={field.value}
      onValueChange={field.onChange}
      placeholder={{ label: 'Never', value: 'Never' }}
      items={items}>
      <InputWrapper>
        <View style={styles.container}>
          <View style={styles.row}>
            <Icon />
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.input}>{field.value as string}</Text>
            <ArrowAngle color={COLORS.PLACEHOLDER} />
          </View>
        </View>
      </InputWrapper>
    </RNPickerSelect>
  );
};
