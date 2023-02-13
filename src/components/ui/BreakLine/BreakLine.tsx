import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './BreakLine.styles';
import { Props } from './BreakLine.types';

export const BreakLine: FC<Props> = ({ isDark }) => {
  const style = styles(isDark);

  return (
    <View style={style.brakeLine}>
      <View style={style.brakeLineChild} />
    </View>
  );
};
