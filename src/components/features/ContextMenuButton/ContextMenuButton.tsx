import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Dots } from '@/components/icons';
import { useThemeContext } from '@/context/hooks';

import { Props } from './ContextMenuButton.types';

export const ContextMenuButton: FC<Props> = ({ icon = Dots, onPress }) => {
  const Icon = icon;
  const { theme } = useThemeContext();

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon color={theme.ICONS.SECONDARY} />
    </TouchableOpacity>
  );
};
