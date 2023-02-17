import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack } from '@/components/icons';

import styles from './BackButtonHeader.styles';
import { Props } from './BackButtonHeader.types';

export const BackButtonHeader: FC<Props> = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <ArrowBack />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
