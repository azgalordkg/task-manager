import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Checkbox } from '@/components/icons';
import { COLORS } from '@/constants';

import { Props } from './CustomCheckbox.types';

export const CustomCheckbox: FC<Props> = ({
  onPress,
  checked,
  checkedColor = COLORS.GREEN,
  defaultColor = COLORS.WHITE,
  size = 28,
  type,
  checkmarkColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Checkbox
        checkmarkColor={checkmarkColor}
        color={checked ? checkedColor : defaultColor}
        checked={checked}
        width={size}
        height={size}
        type={type}
      />
    </TouchableOpacity>
  );
};
