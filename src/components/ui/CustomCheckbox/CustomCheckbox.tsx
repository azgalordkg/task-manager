import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Checkmark } from '@/components/icons';
import { COLORS } from '@/constants';

import { Props } from './CustomCheckbox.types';

export const CustomCheckbox: FC<Props> = ({
  onPress,
  checked,
  checkedColor = COLORS.DARK_GREEN,
  defaultColor = COLORS.WHITE,
  size = 28,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Checkmark
        color={checked ? checkedColor : defaultColor}
        checked={checked}
        width={size}
        height={size}
      />
    </TouchableOpacity>
  );
};
