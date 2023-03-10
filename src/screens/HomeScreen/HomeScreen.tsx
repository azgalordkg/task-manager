import { useIsFocused } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
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
    navigation.navigate('Task', { id });
  };

  const handleEditPress = (id: string) => {
    navigation.navigate('CreateTask', { id });
  };

  const handleCreatePress = () => {
    navigation.navigate('CreateTask');
  };

  return (
    <MainLayout withHeader navigation={navigation}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={style.contentWrapper}>
          <TaskList
            onItemPress={handleItemPress}
            onEditPress={handleEditPress}
            list={taskList}
          />
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
