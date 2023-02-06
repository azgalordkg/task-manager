import React, {FC} from 'react';
import styles from './BrakeLine.styles';
import {View} from 'react-native';
import {Props} from './BrakeLine.types';
import {COLORS} from '../../../constants';

export const BrakeLine: FC<Props> = ({isDark}) => {
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
