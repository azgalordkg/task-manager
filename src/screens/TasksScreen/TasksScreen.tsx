import { useIsFocused } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { TaskList } from '@/components/features';
import { Plus } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { EmptyTaskList } from '@/components/ui';
import { COLORS } from '@/constants';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { updateRecurringTasks } from '@/services';
import { ScreenProps } from '@/types';
import { getDayTitle, vibrate } from '@/utils';

import styles from './TasksScreen.styles';

export const TasksScreen: FC<ScreenProps<'TaskDay'>> = ({ navigation }) => {
  const { taskList, fetchList } = useTaskModalContext();
  const { fetchTags } = useTagManageContext();
  const [dailyTasksUpdated, setDailyTasksUpdated] = useState(false);
  const isFocused = useIsFocused();

  const { theme } = useThemeContext();
  const style = styles(theme);
  const todayDate = new Date();

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

  const dayTitle = getDayTitle(new Date());

  return (
    <MainLayout
      screenTitle="Today"
      onBack={() => navigation.navigate('Dashboard')}
      isFilter>
      <Text style={style.dayTitle}>{dayTitle}</Text>
      {taskList.length ? (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={style.contentWrapper}>
            <TaskList date={todayDate} onItemPress={handleItemPress} />
          </View>
        </ScrollView>
      ) : (
        <View style={style.container}>
          <EmptyTaskList handleCreatePress={handleCreatePress} />
        </View>
      )}

      <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
        <View style={style.buttonWrapper}>
          <Plus color={COLORS.WHITE} width={18} height={18} />
        </View>
      </TouchableOpacity>
    </MainLayout>
  );
};
