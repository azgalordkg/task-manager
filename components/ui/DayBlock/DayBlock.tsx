import React, {FC, PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styles from './DayBlock.styles';
import {BrakeLine} from '../BrakeLine';

export const DayBlock: FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={styles.container}>
      <BrakeLine />
      <View style={styles.dateWrapper}>
        <View style={styles.dayWrapper}>
          <Text style={styles.day}>18</Text>
        </View>
        <View style={styles.monthWrapper}>
          <Text style={styles.month}>Aug </Text>
          <Text style={styles.dayOfWeek}>/ Mon</Text>
        </View>
      </View>
      {children}
    </View>
  );
};
