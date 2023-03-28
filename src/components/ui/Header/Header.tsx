import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Setting } from '@/components/icons';
import { ProgressBar } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './Header.styles';
import { Props } from './Header.types';

export const Header: FC<Props> = ({ onSettingsPress }) => {
  const { theme } = useThemeContext();

  return (
    <View style={styles.header}>
      <ProgressBar />
      <TouchableOpacity onPress={onSettingsPress}>
        <Setting color={theme.BACKGROUND_NEUTRAL} width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
};
