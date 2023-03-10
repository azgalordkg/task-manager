import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Switch, Text, View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './Checkbox.styles';
import { Props } from './Checkbox.types';

export const Checkbox: FC<Props> = ({
  label,
  onValueChange,
  control,
  defaultValue,
  name,
}) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: COLORS.WHITE_DARK, true: COLORS.GREEN }}
        thumbColor={COLORS.WHITE_LIGHT}
        ios_backgroundColor={COLORS.WHITE_DARK}
        value={field.value as boolean}
        onValueChange={onValueChange}
      />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};
