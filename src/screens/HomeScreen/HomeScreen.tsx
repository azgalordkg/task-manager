import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

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
import { isDateToday, sortTasksForRender, vibrate } from '@/utils';

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

  const sections = useMemo(
    () =>
      sortTasksForRender(taskList).map((date, index) => ({
        id: index,
        title: date,
        content: taskList[date].sort((a, b) => +a.isDone - +b.isDone),
      })),
    [taskList],
  );

  const todayTasks = useMemo(
    () =>
      sections?.find(sectionsItem => {
        const date = moment(new Date(+sectionsItem.title));
        return isDateToday(date);
      }),
    [sections],
  );

  const totalTasks = todayTasks?.content.length;

  const doneTasks = useMemo(
    () => todayTasks?.content.filter(({ isDone }) => isDone).length,
    [todayTasks],
  );

  return (
    <MainLayout
      tasksTotal={totalTasks}
      tasksCurrent={doneTasks}
      withHeader
      navigation={navigation}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={style.contentWrapper}>
          <TaskList onItemPress={handleItemPress} sections={sections} />
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
