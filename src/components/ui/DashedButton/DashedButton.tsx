import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './DashedButton.styles';
import { Props } from './DashedButton.types';

export const DashedButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
