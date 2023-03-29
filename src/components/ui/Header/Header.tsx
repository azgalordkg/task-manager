import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Setting } from '@/components/icons';
import { ProgressBar } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './Header.styles';
import { Props } from './Header.types';

export const Header: FC<Props> = ({ onSettingsPress, current, total }) => {
  return (
    <View style={styles.header}>
      <ProgressBar current={current} total={total} />
      <TouchableOpacity onPress={onSettingsPress}>
        <Setting color={COLORS.WHITE} width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
};
