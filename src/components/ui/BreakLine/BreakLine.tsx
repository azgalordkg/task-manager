import React, { FC } from 'react';
import { View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './BreakLine.styles';
import { Props } from './BreakLine.types';

export const BreakLine: FC<Props> = ({ isDark }) => {
  return (
    <View
      style={{
        ...styles.brakeLine,
        ...(isDark ? { backgroundColor: COLORS.GREY } : {}),
      }}>
      <View
        style={{
          ...styles.brakeLineChild,
          ...(isDark ? { backgroundColor: COLORS.BG } : {}),
        }}
      />
    </View>
  );
};
