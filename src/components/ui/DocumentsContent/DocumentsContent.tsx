import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { useThemeContext } from '@/context/hooks';

import styles from './DocumentsContent.styles';
import { Props } from './DocumentsContent.types';

export const DocumentsContent: FC<Props> = ({ content }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View>
      <Text style={style.content}>{content}</Text>
    </View>
  );
};
