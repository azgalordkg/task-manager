import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { Cross } from '@/components/icons';

import styles from './Tag.styles';
import { Props } from './Tag.types';

export const Tag: FC<Props> = ({ name, bgColor, onPress }) => {
  const style = styles(bgColor);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.tabsContainer}>
        <Text style={style.tabsTitle}>{name}</Text>
        {onPress && (
          <View style={style.close}>
            <Cross color={bgColor} width={5} height={5} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
