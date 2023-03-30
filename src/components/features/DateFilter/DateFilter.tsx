import React, { FC } from 'react';
import { View } from 'react-native';

import { formatDate, getDateFromToday, getToday, vibrate } from '@/utils';

import { CustomButton } from '../../ui';
import styles from './DateFilter.styles';
import { Props } from './DateFilter.types';

export const DateFilter: FC<Props> = ({
  currentStartDate,
  currentEndDate,
  onPressHandler,
}) => {
  return (
    <View style={styles.dateButtonsWrapper}>
      {Array.from({ length: 5 }).map((_, index) => {
        let startDate = getToday();
        if (index > 0) {
          startDate = getDateFromToday(index);
        }
        index === 0 ? getToday() : getDateFromToday(index + 2);
        const isCurrent = currentStartDate.getDate() === startDate.getDate();

        const onDateChange = () => {
          vibrate('selection');
          startDate.setHours(
            currentStartDate.getHours(),
            currentStartDate.getMinutes(),
          );

          const endDate = new Date(startDate);
          endDate.setHours(
            currentEndDate.getHours(),
            currentEndDate.getMinutes(),
          );

          onPressHandler('startDate', startDate);
        };

        return (
          <View key={startDate.getDay()} style={styles.dateButtonContainer}>
            <CustomButton
              height={30}
              type={isCurrent ? 'filled' : 'outlined'}
              borderWidth={1}
              paddingHorizontal={5}
              fontSize={14}
              onPress={onDateChange}>
              {index > 1
                ? `${startDate.getDate()} ${formatDate(startDate, 'MMM')}`
                : index === 0
                ? 'Today'
                : 'Tomorrow'}
            </CustomButton>
          </View>
        );
      })}
    </View>
  );
};
