import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS } from '@/constants';

import styles from './CustomButton.styles';
import { Props } from './CustomButton.types';

export const CustomButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  bgColor = COLORS.GREEN,
  textColor = COLORS.WHITE,
  type = 'filled',
  height = 40,
  fullWidth,
  width = 'auto',
  paddingHorizontal = 15,
  fontSize = 18,
  borderWidth = 2,
  disabled,
  iconColor = COLORS.WHITE,
  icon,
  iconWidth = 14,
  iconHeight = 14,
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
      {Icon && <Icon color={iconColor} width={iconWidth} height={iconHeight} />}
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
