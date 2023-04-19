import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Month } from 'react-native-month';

import { TaskList } from '@/components/features';
import { ArrowDown, Plus } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { MonthPickerModal } from '@/components/modals';
import { COLORS } from '@/constants';
import { useTasksContext, useThemeContext } from '@/context/hooks';
import { ScreenProps } from '@/types';
import { formatDate, getDayTitle, getDottedDays, vibrate } from '@/utils';

import styles from './UpcomingScreen.styles';

export const UpcomingScreen: FC<ScreenProps<'Upcoming'>> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { fetchList, handleTaskDateChange } = useTasksContext();

  const [selectedDate, setSelectedDate] = useState(
    moment()
      .locale(language || 'en')
      .toDate(),
  );
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const style = styles(theme);
  const maxDate = moment().add(10, 'years').toDate();
  const dayTitle = getDayTitle(selectedDate, language);

  const handleShowMonthModal = () => {
    setMonthModalVisible(!monthModalVisible);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    handleTaskDateChange(moment(date).valueOf());
  };

  const handleMonthChange = (date: Date) => {
    handleDateChange(date);
    setMonthModalVisible(false);
  };

  const onBack = () => {
    navigation.goBack();
    handleTaskDateChange(moment().valueOf());
  };

  const handleItemPress = (id: string) => {
    vibrate('rigid');
    navigation.navigate('CreateTask', { id });
  };

  useEffect(() => {
    fetchList();
  }, [selectedDate]);

  const handleCreatePress = () => {
    vibrate('selection');
    navigation.navigate('CreateTask');
  };

  const dottedDays = Object.assign({}, ...getDottedDays(theme));

  const weekdaysShort = moment.localeData(language).weekdaysShort();

  return (
    <MainLayout onBack={onBack} screenTitle={`${t('UPCOMING')}`}>
      <View style={style.contentWrapper}>
        <View style={style.headerStyle}>
          <TouchableOpacity activeOpacity={1} onPress={handleShowMonthModal}>
            <View style={style.selectContainer}>
              <Text style={style.selectDateText}>
                {formatDate(selectedDate, 'MMM YYYY', language)}
              </Text>
              <ArrowDown color={theme.TEXT.PRIMARY} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleDateChange(moment(moment(), 'DD.MM.YYYY').toDate())
            }>
            <Text style={style.todayText}>{t('TODAY')}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.weekdayContainer}>
          {weekdaysShort.map(weekday => (
            <Text style={style.weekdayText} key={weekday}>
              {weekday}
            </Text>
          ))}
        </View>
        <Month
          month={moment(selectedDate).month()}
          year={moment(selectedDate).year()}
          onPress={handleDateChange}
          startDate={selectedDate}
          disableRange
          maxDate={maxDate}
          firstDayMonday={false}
          markedDays={dottedDays}
          theme={{
            activeDayColor: theme.TEXT.PRIMARY,
            activeDayContainerStyle: style.activeDayContainerStyle,
            activeDayTextStyle: style.activeDayTextStyle,
            dayContainerStyle: style.dayContainerStyle,
            dayContentStyle: {},
            dayTextStyle: style.dayTextStyle,
            endDateContainerStyle: style.endDateContainerStyle,
            todayTextStyle: style.todayTextStyle,
            nonTouchableDayTextStyle: style.nonTouchableDayTextStyle,
            startDateContainerStyle: style.startDateContainerStyle,
          }}
        />

        <MonthPickerModal
          selectedMonth={selectedDate}
          visible={monthModalVisible}
          onPressDismiss={handleShowMonthModal}
          onDateChange={handleMonthChange}
        />
      </View>

      <Text style={style.dayTitle}>{dayTitle}</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={style.taskListWrapper}>
          <TaskList isUpcoming onItemPress={handleItemPress} />
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
        <View style={style.buttonWrapper}>
          <Plus color={COLORS.WHITE} width={18} height={18} />
        </View>
      </TouchableOpacity>
    </MainLayout>
  );
};
