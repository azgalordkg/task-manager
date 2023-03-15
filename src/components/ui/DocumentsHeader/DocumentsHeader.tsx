import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { Minus, Plus } from '@/components/icons';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

import styles from './DocumentsHeader.styles';
import { Props } from './DocumentsHeader.types';

export const DocumentsHeader: FC<Props> = ({ title, active }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View style={style.titleWrapper}>
      <Text style={style.title}>{title}</Text>
      {active ? (
        <Minus color={COLORS.WHITE} width={14} height={14} />
      ) : (
        <Plus color={COLORS.WHITE} width={14} height={14} />
      )}
    </View>
  );
};
