import { format } from 'date-fns';
import React, { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import styles from './DayBlock.styles';
import { Props } from './DayBlock.types';

export const DayBlock: FC<PropsWithChildren<Props>> = ({ children, date }) => {
  const currentDate = date ? new Date(Number(date)) : new Date();
  const isToday = currentDate?.getDay() === new Date().getDay();
  const style = styles({ isToday });

  return (
    <View style={style.container}>
      <View style={style.dateWrapper}>
        <View style={style.dayWrapper}>
          {currentDate && (
            <Text style={style.day}>{format(currentDate, 'dd')}</Text>
          )}
        </View>
        <View style={style.monthWrapper}>
          {currentDate && (
            <Text style={style.month}>{format(currentDate, 'MMM')} </Text>
          )}
          {currentDate && (
            <Text style={style.dayOfWeek}>/ {format(currentDate, 'iii')}</Text>
          )}
        </View>
      </View>
      <View style={style.contentWrapper}>{children}</View>
    </View>
  );
};
