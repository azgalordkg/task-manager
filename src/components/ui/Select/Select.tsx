import React, { FC } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { ArrowAngle, Repeat } from '@/components/icons';
import { InputWrapper } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './Select.styles';
import { Props } from './Select.types';

export const Select: FC<Props> = ({
  label,
  value,
  icon = Repeat,
  items,
  onValueChange,
}) => {
  const Icon = icon;
  return (
    <RNPickerSelect
      value={value}
      onValueChange={onValueChange}
      placeholder={{ label: 'Never', value: 'Never' }}
      items={items}>
      <InputWrapper>
        <View style={styles.container}>
          <View style={styles.row}>
            <Icon />
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.input}>{value}</Text>
            <ArrowAngle color={COLORS.PLACEHOLDER} />
          </View>
        </View>
      </InputWrapper>
    </RNPickerSelect>
  );
};
