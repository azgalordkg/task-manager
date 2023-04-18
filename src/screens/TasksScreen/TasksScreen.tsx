import { useIsFocused } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { TaskList } from '@/components/features';
import { Plus } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { EmptyTaskList } from '@/components/ui';
import { COLORS } from '@/constants';
import {
  useTagManageContext,
  useTasksContext,
  useThemeContext,
} from '@/context/hooks';
import { updateRecurringTasks } from '@/services';
import { ScreenProps } from '@/types';
import { getDayTitle, vibrate } from '@/utils';

import styles from './TasksScreen.styles';

export const TasksScreen: FC<ScreenProps<'Tasks'>> = ({
  navigation,
  route,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isUnscheduled = route?.params?.isUnscheduled;
  const { taskList, unscheduledTaskList, fetchList } = useTasksContext();
  const { fetchTags } = useTagManageContext();
  const [dailyTasksUpdated, setDailyTasksUpdated] = useState(false);
  const isFocused = useIsFocused();

  const { theme } = useThemeContext();
  const style = styles(theme);

  useEffect(() => {
    if (isFocused) {
      fetchList();
    }
  }, [isFocused, isUnscheduled]);

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
    navigation.navigate('CreateTask', { id, isUnscheduled });
  };

  const handleCreatePress = () => {
    vibrate('selection');
    navigation.navigate('CreateTask', { isUnscheduled });
  };

  const tasks = isUnscheduled ? unscheduledTaskList : taskList;

  return (
    <MainLayout
      screenTitle={`${isUnscheduled ? t('UNSCHEDULED') : t('TODAY')}`}
      onBack={() => navigation.navigate('Dashboard')}
      isFilter>
      {!isUnscheduled && (
        <Text style={style.dayTitle}>{getDayTitle(new Date(), language)}</Text>
      )}
      {tasks.length ? (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={style.mainWrapper}>
            <TaskList
              isUnscheduled={isUnscheduled}
              onItemPress={handleItemPress}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={style.container}>
          <EmptyTaskList
            isUnscheduled={isUnscheduled}
            handleCreatePress={handleCreatePress}
          />
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
