import React, { FC } from 'react';
import { Text, View } from 'react-native';

import styles from './DocumentsContent.styles';
import { Props } from './DocumentsContent.types';

export const DocumentsContent: FC<Props> = ({ content }) => {
  return (
    <View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};
