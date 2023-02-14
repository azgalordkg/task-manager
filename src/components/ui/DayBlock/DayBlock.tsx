import { format } from 'date-fns';
import React, { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import { BreakLine } from '../BreakLine';
import styles from './DayBlock.styles';
import { Props } from './DayBlock.types';

export const DayBlock: FC<PropsWithChildren<Props>> = ({ children, date }) => {
  const currentDate = date ? new Date(Number(date)) : new Date();
  const isToday = currentDate?.getDay() === new Date().getDay();

  return (
    <View style={styles.contentWrapper}>
      <BreakLine />
      <View style={styles.dateWrapper}>
        <View style={styles.dayWrapper}>
          {currentDate && (
            <Text style={styles.day}>{format(currentDate, 'dd')}</Text>
          )}
        </View>
        <View style={styles.monthWrapper}>
          {currentDate && (
            <Text style={styles.month}>{format(currentDate, 'MMM')} </Text>
          )}
          {currentDate && (
            <Text style={styles.dayOfWeek}>/ {format(currentDate, 'iii')}</Text>
          )}
        </View>
        {isToday && (
          <View style={[styles.dayWrapper, styles.todayWrapper]}>
            <Text style={styles.today}>Today</Text>
          </View>
        )}
      </View>
      {children}
    </View>
  );
};
