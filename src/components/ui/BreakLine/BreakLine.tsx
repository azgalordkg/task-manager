import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './BreakLine.styles';
import { Props } from './BreakLine.types';

export const BreakLine: FC<Props> = ({ isDark, marginBottom }) => {
  const style = styles(isDark, marginBottom);

  return <View style={style.brakeLine} />;
};
