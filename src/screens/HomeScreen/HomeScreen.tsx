import React, { FC, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import {
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Realm from 'realm';

import { CreateTaskForm, TaskList } from '@/components/features';
import { Plus } from '@/components/icons';
import { MainLayout } from '@/components/Layouts';
import { ModalComponent } from '@/components/ui';
import { COLORS } from '@/constants';
import { sortTasksByDate } from '@/services';
import { createTask, getTasks } from '@/services/realm';
import { CreateTaskData, ScreenProps, TasksList } from '@/types';

import styles from './HomeScreen.styles';

export const HomeScreen: FC<ScreenProps<'Home'>> = ({ navigation }) => {
  const [list, setList] = useState<TasksList | undefined>();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const fetchList = () => {
    const tasks: Realm.Results<Realm.Object> | any[] = getTasks();
    const tasksByDays = sortTasksByDate(tasks);

    if (tasks) {
      setList(tasksByDays);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const createTaskHandler = (data: FieldValues) => {
    createTask(data as CreateTaskData);
    fetchList();
    setCreateModalVisible(false);
  };

  const handleItemPress = (id: string) => {
    navigation.navigate('Task', { id });
  };

  return (
    <MainLayout>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
            ...styles.container,
          }}>
          <TaskList
            onItemPress={handleItemPress}
            fetchList={fetchList}
            list={list}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => setCreateModalVisible(true)}
        activeOpacity={0.75}>
        <View style={styles.buttonWrapper}>
          <Plus color={COLORS.BG} width={20} height={20} />
        </View>
      </TouchableOpacity>

      <ModalComponent
        visible={createModalVisible}
        onRequestClose={() => setCreateModalVisible(false)}>
        <CreateTaskForm onSubmit={createTaskHandler} />
      </ModalComponent>
    </MainLayout>
  );
};
