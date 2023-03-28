import React, { FC } from 'react';
import { Text, View } from 'react-native';

import styles from './ProgressBar.styles';
import { Props } from './ProgressBar.types';

export const ProgressBar: FC<Props> = () => {
  const style = styles();
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <View style={style.progress} />
      </View>
      <Text style={style.text}>1/5</Text>
    </View>
  );
};
