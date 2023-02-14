import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Logo, Menu } from '@/components/icons';

import styles from './Header.styles';
import { Props } from './Header.types';

export const Header: FC<Props> = ({ onMenuPress, withMenu }) => {
  return (
    <View style={styles.header}>
      {withMenu && (
        <TouchableOpacity onPress={onMenuPress} style={styles.button}>
          <Menu />
        </TouchableOpacity>
      )}
      <Logo height={30} width={145} />
    </View>
  );
};
