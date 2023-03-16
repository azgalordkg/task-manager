import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

import styles from './Loader.styles';
import { Props } from './Loader.types';

export const Loader: FC<Props> = ({ size = 'large', color = COLORS.GREEN }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View style={style.loaderContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
