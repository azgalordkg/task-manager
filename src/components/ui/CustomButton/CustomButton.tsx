import React, { FC, PropsWithChildren } from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { COLORS } from '@/constants';

import styles from './CustomButton.styles';
import { Props } from './CustomButton.types';

export const CustomButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  bgColor = COLORS.BLUE,
  textColor = COLORS.WHITE,
  type = 'filled',
  height = 40,
  fullWidth,
  width = 'auto',
  padding = 15,
  fontSize = 18,
  borderWidth = 2,
}) => {
  const buttonStyles: ViewStyle = {
    ...styles.button,
    width: fullWidth ? '100%' : width,
    paddingHorizontal: padding,
    height,
  };
  const textStyles: TextStyle = {
    ...styles.text,
    fontSize: fontSize,
  };

  if (type === 'filled') {
    buttonStyles.backgroundColor = bgColor;
    textStyles.color = textColor;
  }
  if (type === 'outlined') {
    buttonStyles.backgroundColor = 'transparent';
    buttonStyles.borderWidth = borderWidth;
    buttonStyles.borderColor = bgColor;
    textStyles.color = bgColor;
  }
  if (type === 'clean') {
    textStyles.color = COLORS.BG;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={buttonStyles}
      onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
