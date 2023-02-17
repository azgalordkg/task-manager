import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Logo, Setting } from '@/components/icons';

import styles from './Header.styles';
import { Props } from './Header.types';

export const Header: FC<Props> = ({ onMenuPress }) => {
  return (
    <View style={styles.header}>
      <Logo height={30} width={145} />
      <TouchableOpacity onPress={onMenuPress}>
        <Setting width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
};
