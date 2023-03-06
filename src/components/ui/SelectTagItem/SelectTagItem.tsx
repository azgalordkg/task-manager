import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Edit } from '@/components/icons';
import { CustomCheckbox } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './SelectTagItem.styles';
import { Props } from './SelectTagItem.types';

export const SelectTagItem: FC<Props> = ({
  onPress,
  checked,
  title,
  color = COLORS.RED,
  onEditPress,
  isDefault,
  isSettings,
}) => {
  const style = styles(color, isSettings);

  return (
    <View style={style.container}>
      {!isSettings && (
        <CustomCheckbox
          defaultColor={COLORS.GREY}
          size={26}
          checked={checked}
          onPress={onPress}
        />
      )}
      <View style={style.dot} />
      <Text style={style.text}>{title}</Text>
      {!isDefault && (
        <TouchableOpacity onPress={onEditPress} style={style.edit}>
          <Edit color={COLORS.GREY} width={20} height={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};
