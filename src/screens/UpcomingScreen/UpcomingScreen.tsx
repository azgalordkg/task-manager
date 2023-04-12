import moment, { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import { MonthPicker } from '@/components/features';
import { ArrowDown } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { useThemeContext } from '@/context/hooks';
import { ScreenProps } from '@/types';
import { formatDate } from '@/utils';

import styles from './UpcomingScreen.styles';

export const UpcomingScreen: FC<ScreenProps<'Upcoming'>> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const [dateState, setDateState] = useState<Moment>(moment());
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const style = styles(theme);
  const minDate = moment().toDate();
  const maxDate = moment().add(10, 'years').toDate();

  const onDateChange = (date: Moment) => {
    setDateState(date);
  };

  const handleVisibleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const onBack = () => navigation.goBack();

  const handleClickToday = () => {
    setDateState(moment(moment(), 'DD.MM.YYYY'));
  };

  const handleChangeMonth = (date: string) => {
    setDateState(moment(new Date(date)));
  };

  return (
    <MainLayout onBack={onBack} screenTitle="Upcoming" isFilter>
      <View style={style.contentWrapper}>
        <View style={style.headerStyle}>
          <TouchableOpacity activeOpacity={1} onPress={handleVisibleModal}>
            <View style={style.selectContainer}>
              <Text style={style.selectDateText}>
                {formatDate(dateState.toDate(), 'MMM YYYY')}
              </Text>
              <ArrowDown color={theme.TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickToday}>
            <Text style={style.todayText}>{t('TODAY')}</Text>
          </TouchableOpacity>
        </View>

        <CalendarPicker
          startFromMonday={true}
          selectedDayTextColor={theme.TEXT_PRIMARY}
          initialDate={dateState?.toDate()}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="transparent"
          todayTextStyle={style.datePickerTodayTextStyle}
          dayShape="square"
          headerWrapperStyle={style.datePickerHeader}
          textStyle={style.datePickerTextStyle}
          showDayStragglers
          // customDatesStyles={}
          selectedDayTextStyle={style.datePickerSelectedDayTextStyle}
          selectedDayStyle={style.datePickerSelectedDayStyle}
          onDateChange={onDateChange}
        />

        <MonthPicker
          isVisibleModal={isVisibleModal}
          handleVisibleModal={handleVisibleModal}
          handleChangeMonth={handleChangeMonth}
        />
      </View>
    </MainLayout>
  );
};
