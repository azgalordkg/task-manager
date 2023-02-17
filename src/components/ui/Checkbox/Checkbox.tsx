import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { Switch, Text, View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './Checkbox.styles';
import { Props } from './Checkbox.types';

export const Checkbox: FC<Props> = ({
  label,
  onChange,
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
        trackColor={{ false: COLORS.GREY, true: COLORS.DARK_GREEN }}
        thumbColor={COLORS.WHITE}
        ios_backgroundColor={COLORS.GREY}
        value={field.value as boolean}
        onValueChange={onChange}
      />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};
