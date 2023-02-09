import React, { FC } from 'react';
import { View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './BrakeLine.styles';
import { Props } from './BrakeLine.types';

export const BrakeLine: FC<Props> = ({ isDark }) => {
  if (isDark) {
    styles.brakeLine.backgroundColor = COLORS.GREY;
    styles.brakeLineChild.backgroundColor = COLORS.BG;
  }

  return (
    <View style={styles.brakeLine}>
      <View style={styles.brakeLineChild} />
    </View>
  );
};
