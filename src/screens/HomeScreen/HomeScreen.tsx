import { useIsFocused } from '@react-navigation/native';
import { t } from 'i18next';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { TaskList } from '@/components/features';
import { Plus } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { updateRecurringTasks } from '@/services';
import { ScreenProps } from '@/types';
import { formatDate, vibrate } from '@/utils';

import styles from './HomeScreen.styles';

export const HomeScreen: FC<ScreenProps<'Home'>> = ({ navigation }) => {
  const { taskList, fetchList } = useTaskModalContext();
  const { fetchTags } = useTagManageContext();
  const [dailyTasksUpdated, setDailyTasksUpdated] = useState(false);
  const isFocused = useIsFocused();

  const { theme } = useThemeContext();
  const style = styles(theme);

  useEffect(() => {
    if (isFocused) {
      fetchList();
    }
  }, [isFocused]);

  useEffect(() => {
    if (Object.keys(taskList).length && !dailyTasksUpdated) {
      updateRecurringTasks(taskList);
      fetchList();
      setDailyTasksUpdated(true);
    }
  }, [taskList, dailyTasksUpdated]);

  useEffect(() => {
    fetchTags();
  }, []);

  const handleItemPress = (id: string) => {
    vibrate('rigid');
    navigation.navigate('CreateTask', { id });
  };

  const handleCreatePress = () => {
    vibrate('selection');
    navigation.navigate('CreateTask');
  };

  const getDayTitle = (date: Date) => {
    const momentDate = moment(date);
    const formattedDate = formatDate(date, 'D MMM');
    const today = moment().startOf('day');
    const tomorrow = moment().add(1, 'day').startOf('day');
    const dayOfWeek = formatDate(date, 'dddd');
    let todayOrTomorrow = '';

    if (momentDate.isSame(today, 'day')) {
      todayOrTomorrow = `• ${t('TODAY')}`;
    } else if (moment(date).isSame(tomorrow, 'day')) {
      todayOrTomorrow = `• ${t('TOMORROW')}`;
    }

    return `${formattedDate} ${todayOrTomorrow} • ${dayOfWeek}`;
  };

  const dayTitle = getDayTitle(new Date());

  return (
    <MainLayout
      screenTitle="Today"
      onBack={() => navigation.navigate('CreateTag')}
      isFilter>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={style.dayTitle}>{dayTitle}</Text>

        <View style={style.contentWrapper}>
          <TaskList date={new Date()} onItemPress={handleItemPress} />
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
        <View style={style.buttonWrapper}>
          <Plus color={theme.BACKGROUND_PRIMARY} width={20} height={20} />
        </View>
      </TouchableOpacity>
    </MainLayout>
  );
};
