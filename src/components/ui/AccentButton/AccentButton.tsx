import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useThemeContext } from '@/context/hooks';

import styles from './AccentButton.styles';
import { Props } from './AccentButton.types';

export const AccentButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
