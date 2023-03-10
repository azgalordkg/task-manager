import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS } from '@/constants';

import styles from './CustomButton.styles';
import { Props } from './CustomButton.types';

export const CustomButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  bgColor = COLORS.GREEN,
  textColor = COLORS.WHITE_LIGHT,
  type = 'filled',
  height = 40,
  fullWidth,
  width = 'auto',
  paddingHorizontal = 15,
  fontSize = 18,
  borderWidth = 2,
  disabled,
  icon,
}) => {
  const Icon = icon;
  const style = styles({
    width,
    fullWidth,
    paddingHorizontal,
    height,
    fontSize,
    type,
    bgColor,
    textColor,
    borderWidth,
    disabled,
  });

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={style.button}
      onPress={onPress}
      disabled={disabled}>
      {Icon && <Icon color={COLORS.WHITE_LIGHT} width={14} height={14} />}
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
