import React, {FC} from 'react';
import styles from './DateFilter.styles';
import {getDateFromToday, getToday} from '../../../services';
import {View} from 'react-native';
import {CustomButton} from '../../ui';
import {format} from 'date-fns';
import {Props} from './DateFilter.types';

const DateFilter: FC<Props> = ({
  currentStartDate,
  currentEndDate,
  onPressHandler,
}) => {
  return (
    <View style={styles.dateButtonsWrapper}>
      {Array.from({length: 5}).map((_, index) => {
        let startDate = getToday();
        if (index > 0) {
          startDate = getDateFromToday(index);
        }
        index === 0 ? getToday() : getDateFromToday(index + 2);
        const isCurrent = currentStartDate.getDate() === startDate.getDate();

        const onDateChange = () => {
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
              padding={5}
              fontSize={14}
              onPress={onDateChange}>
              {index > 1
                ? `${startDate.getDate()} ${format(startDate, 'MMM')}`
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

export default DateFilter;
