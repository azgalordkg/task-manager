import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack } from '@/components/icons';
import { useThemeContext } from '@/context/hooks';

import styles from './BackButtonHeader.styles';
import { Props } from './BackButtonHeader.types';

export const BackButtonHeader: FC<Props> = ({ onPress, title }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress} style={style.button}>
        <ArrowBack color={theme.TEXT_PRIMARY} />
      </TouchableOpacity>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};
