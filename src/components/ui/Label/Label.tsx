import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { Cross } from '@/components/icons';

import styles from './Label.styles';
import { Props } from './Label.types';

export const Label: FC<Props> = ({ name, bgColor, onPress }) => {
  const style = styles(bgColor);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.whiteWrapper}>
        <View style={style.tabsContainer}>
          <Text style={style.tabsTitle}>{name}</Text>
          {onPress && (
            <View style={style.close}>
              <Cross color={bgColor} width={6} height={6} />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
