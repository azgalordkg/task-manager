import React, { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import styles from './TextBlank.styles';

export const TextBlank: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
