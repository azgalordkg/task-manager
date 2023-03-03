import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS } from '@/constants';

import styles from './DashedButton.styles';
import { Props } from './DashedButton.types';

export const DashedButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  variant = 'small',
  icon,
}) => {
  let height = 32;
  let fontSize = 12;
  let iconWidth = 10;
  let iconHeight = 10;

  if (variant === 'large') {
    height = 40;
    fontSize = 16;
    iconWidth = 14;
    iconHeight = 14;
  }
  const style = styles(height, fontSize);
  const Icon = icon;

  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      {Icon && (
        <Icon
          style={style.icon}
          width={iconWidth}
          height={iconHeight}
          color={COLORS.LIGHT_GREY}
        />
      )}
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
