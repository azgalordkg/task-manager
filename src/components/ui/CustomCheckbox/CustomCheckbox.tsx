import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Checkbox } from '@/components/icons';
import { COLORS } from '@/constants';

import { Props } from './CustomCheckbox.types';

export const CustomCheckbox: FC<Props> = ({
  onPress,
  checked,
  checkedColor = COLORS.GREEN,
  defaultColor = COLORS.WHITE_LIGHT,
  size = 28,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Checkbox
        color={checked ? checkedColor : defaultColor}
        checked={checked}
        width={size}
        height={size}
      />
    </TouchableOpacity>
  );
};
