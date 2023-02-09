import React, { FC, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Realm from 'realm';
import { CreateTaskData, TasksList } from 'src/types';

import { CreateTaskForm, TaskList } from '@/components/features';
import { Logo, Plus } from '@/components/icons';
import { ModalComponent } from '@/components/ui';
import { COLORS } from '@/constants';
import { createTask, getTasks } from '@/services/realm';

import styles from './HomeScreen.styles';

export const HomeScreen: FC = () => {
  const [list, setList] = useState<TasksList | undefined>();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const fetchList = () => {
    const tasks: Realm.Results<Realm.Object> | any[] = getTasks();
    const tasksByDays: TasksList = {};
    tasks.forEach(task => {
      const date = new Date(task.startDate);
      date.setHours(0, 0, 0, 0);
      const day = date.getTime();

      if (tasksByDays[day]) {
        tasksByDays[day].push(task);
      } else {
        tasksByDays[day] = [task];
      }
    });

    if (tasks) {
      setList(tasksByDays);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const createTaskHandler = (data: FieldValues) => {
    createTask(data as CreateTaskData);
    setCreateModalVisible(false);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.header}>
          <Logo height={30} width={145} />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
              ...styles.container,
            }}>
            <TaskList fetchList={fetchList} list={list} />
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => setCreateModalVisible(true)}
          activeOpacity={0.75}>
          <View style={styles.buttonWrapper}>
            <Plus color={COLORS.BG} width={20} height={20} />
          </View>
        </TouchableOpacity>
      </View>
      <ModalComponent
        visible={createModalVisible}
        onRequestClose={() => setCreateModalVisible(false)}>
        <CreateTaskForm onSubmit={createTaskHandler} />
      </ModalComponent>
    </SafeAreaView>
  );
};
