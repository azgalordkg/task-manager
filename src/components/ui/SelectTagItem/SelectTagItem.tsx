import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Edit } from '@/components/icons';
import { CustomCheckbox } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

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
  const { theme } = useThemeContext();

  const style = styles(theme, color, isSettings);

  return (
    <View style={style.container}>
      {!isSettings && (
        <CustomCheckbox
          defaultColor={COLORS.GREY_LIGHT}
          size={26}
          checked={checked}
          onPress={onPress}
        />
      )}
      <View style={style.dot} />
      <Text style={style.text}>{title}qwe</Text>
      {!isDefault && (
        <TouchableOpacity onPress={onEditPress} style={style.edit}>
          <Edit color={COLORS.GREY_LIGHT} width={20} height={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};
