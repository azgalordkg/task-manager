import React, {FC, PropsWithChildren} from 'react';
import styles from './CustomButton.styles';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Props} from './CustomButton.types';
import {COLORS} from '../../../constants';

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
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
