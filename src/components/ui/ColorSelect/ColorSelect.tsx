import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './ColorSelect.styles';
import { Props } from './ColorSelect.types';

export const ColorSelect: FC<Props> = ({ active, color, onPress }) => {
  const style = styles(active, color);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={style.outer}>
      <View style={style.inner} />
    </TouchableOpacity>
  );
};
