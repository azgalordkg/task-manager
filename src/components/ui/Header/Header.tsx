import React, { FC } from 'react';
import { View } from 'react-native';

import { Logo } from '@/components/icons';

import styles from './Header.styles';
import { Props } from './Header.types';

export const Header: FC<Props> = () => {
  return (
    <View style={styles.header}>
      <Logo height={30} width={145} />
    </View>
  );
};
