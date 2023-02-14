import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './MenuItem.styles';
import { Props } from './MenuItem.types';

export const MenuItem: FC<PropsWithChildren<Props>> = ({
  icon,
  children,
  onPress,
}) => {
  const Icon = icon;

  return (
    <TouchableOpacity onPress={onPress} style={styles.contentWrapper}>
      <Icon style={styles.icon} width={20} height={20} />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
