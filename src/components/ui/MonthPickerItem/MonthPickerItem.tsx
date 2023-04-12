import moment from 'moment';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useThemeContext } from '@/context/hooks';

import { Props } from './MonthPickerItem.types';
import styles from './MountPickerItem.styles';

export const MonthPickerItem: FC<Props> = ({
  monthItem,
  handleDatePress,
  selectedDate,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  const today = moment();

  const yearTitle = Object.keys(monthItem)[0];

  return (
    <View style={style.contentWrapper}>
      <Text style={style.yearTitle}>{yearTitle}</Text>

      <View style={style.monthContainer}>
        {monthItem[+yearTitle].map(({ name, value }) => {
          const isSelectedDate = selectedDate === value;
          const momentValue = moment(new Date(value));

          const isToday =
            today.isSame(momentValue, 'month') &&
            today.isSame(momentValue, 'year');
          const isDisabled =
            today.isAfter(momentValue, 'month') &&
            today.isSameOrAfter(momentValue, 'year');

          return (
            <TouchableOpacity
              disabled={isDisabled}
              key={name}
              onPress={() => handleDatePress(value)}>
              <View
                style={[
                  style.monthItem,
                  isSelectedDate && style.selectedMonthItem,
                ]}>
                <Text
                  style={[
                    style.monthText,
                    isToday && !isSelectedDate && style.todayMonthText,
                    isDisabled && style.disabledMonthText,
                  ]}>
                  {name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
