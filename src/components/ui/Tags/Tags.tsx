import React, { FC } from 'react';
import { Text, View } from 'react-native';

import styles from './Tags.styles';
import { Props } from './Tags.types';

export const Tags: FC<Props> = ({ name, bgColor }) => {
  const style = styles(bgColor);

  return (
    <View style={style.tabsContainer}>
      <Text style={style.tabsTitle}>{name}</Text>
    </View>
  );
};
