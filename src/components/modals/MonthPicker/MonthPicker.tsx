import moment from 'moment/moment';
import React, { FC, useState } from 'react';
import { Modal } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import { ModalWrapper, MonthPickerItem } from '@/components/ui';

import { Props } from './MonthPicker.types';

export const MONTH_LIST = [
  // formatDate(moment(moment().month(0)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(1)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(2)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(3)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(4)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(5)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(6)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(7)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(8)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(9)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(10)).toDate(), 'MMM'),
  // formatDate(moment(moment().month(11)).toDate(), 'MMM'),
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const MonthPicker: FC<Props> = ({
  isVisibleModal,
  handleVisibleModal,
  handleDateChange,
}) => {
  const momentDate = moment();
  const [selectedMonth, setSelectedMonth] = useState(momentDate.toString());

  const isDisabled =
    momentDate.isSame(moment(+selectedMonth), 'month') &&
    momentDate.isSame(moment(+selectedMonth), 'year');

  const prepareMonthList = () => {
    const currentYear = momentDate.year();

    return Array.from({ length: 3 }).map((_, index) => {
      const year = currentYear + index;

      const monthList = MONTH_LIST.map((monthName, monthIndex) => {
        const date = momentDate.year(year).month(monthIndex).toString();

        return { name: monthName, value: date };
      });

      return { [year]: monthList };
    });
  };

  const handleDatePress = (date: string) => {
    setSelectedMonth(date);
  };

  const handlePressClose = () => {
    handleVisibleModal();
    handleDateChange(moment(selectedMonth).toDate());
  };

  const handleDonePress = () => {
    handleVisibleModal();
    handleDateChange(moment(moment(), 'DD.MM.YYYY').toDate());
  };

  return (
    <GestureRecognizer onSwipeDown={handleVisibleModal}>
      <Modal
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent
        visible={isVisibleModal}>
        <ModalWrapper
          title="Select a Month"
          onRequestClose={handlePressClose}
          responsiveHeight
          onDonePress={handleDonePress}
          isDoneDisabled={isDisabled}
          doneText="Today">
          {prepareMonthList().map(monthItem => (
            <MonthPickerItem
              key={Object.keys(monthItem)[0]}
              monthItem={monthItem}
              handleDatePress={handleDatePress}
              selectedMonth={selectedMonth}
            />
          ))}
        </ModalWrapper>
      </Modal>
    </GestureRecognizer>
  );
};
