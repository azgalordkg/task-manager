import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './BreakLine.styles';
import { Props } from './BreakLine.types';

export const BreakLine: FC<Props> = ({ color, marginBottom }) => {
  const style = styles(color, marginBottom);

  return <View style={style.brakeLine} />;
};
