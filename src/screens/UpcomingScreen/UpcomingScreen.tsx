import moment from 'moment';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

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

  const [selectedDate, setSelectedDate] = useState(moment().toDate());
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const style = styles(theme);
  const maxDate = moment().add(10, 'years').toDate();
  const dayTitle = getDayTitle(selectedDate, language);
  const dateFormat = formatDate(selectedDate, 'YYYY-MM-DD');

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

  const selectedDay = useMemo(
    () => ({
      [dateFormat]: {
        selected: true,
        customStyles: {
          container: style.datePickerSelectedDayStyle,
          text: {
            color: theme.TEXT.PRIMARY,
          },
        },
      },
    }),
    [selectedDate],
  );

  const dottedDays = Object.assign({}, ...getDottedDays(theme));
  const markers = { ...dottedDays, ...selectedDay };

  return (
    <MainLayout onBack={onBack} screenTitle={`${t('UPCOMING')}`} isFilter>
      <View style={style.contentWrapper}>
        <Calendar
          initialDate={selectedDate.toString()}
          hideArrows
          markingType="custom"
          style={style.datePicker}
          markedDates={markers}
          maxDate={maxDate.toString()}
          onDayPress={day => handleDateChange(moment(day.timestamp).toDate())}
          disableAllTouchEventsForDisabledDays
          theme={{
            calendarBackground: 'transparent',
            dayTextColor: theme.TEXT.PRIMARY,
            textDisabledColor: theme.TEXT.SECONDARY,
            todayTextColor: theme.TEXT.ACCENT,
            textDayFontSize: 14,
            textSectionTitleColor: COLORS.GREY_LIGHT,
          }}
          renderHeader={() => (
            <View style={style.headerStyle}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={handleShowMonthModal}>
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
          )}
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
