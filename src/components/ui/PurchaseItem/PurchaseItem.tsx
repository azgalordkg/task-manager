import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { Repeat } from '@/components/icons';
import { COLORS } from '@/constants';
import { getPurchaseItemWidth } from '@/utils';

import styles from './PurchaseItem.styles';
import { Props } from './PurchaseItem.types';

export const PurchaseItem: FC<Props> = ({ icon = Repeat, title }) => {
  const containerWidth = getPurchaseItemWidth();
  const Icon = icon;
  const style = styles(containerWidth);

  return (
    <View style={style.container}>
      <View style={style.iconWrapper}>
        <Icon width={14} height={14} color={COLORS.BLUE} />
      </View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};
