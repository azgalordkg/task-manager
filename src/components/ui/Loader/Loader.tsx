import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './Loader.styles';
import { Props } from './Loader.types';

export const Loader: FC<Props> = ({
  size = 'large',
  color = COLORS.DARK_GREEN,
}) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
