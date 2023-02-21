import React, { FC, PropsWithChildren } from 'react';
import { FieldValues } from 'react-hook-form';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

import { CreateTaskForm } from '@/components/features';
import { Header, ModalComponent } from '@/components/ui';
import { COLORS } from '@/constants';
import { useTaskModalContext } from '@/context/hooks';
import { createTask, updateTask } from '@/services/realm';
import { CreateTaskData, UpdateTaskData } from '@/types';

import styles from './MainLayout.styles';
import { Props } from './MainLayout.types';

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  navigation,
  withHeader,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { visible, modalVisibleHandler, taskId, fetchList } =
    useTaskModalContext();
  const style = styles(isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  const handleModalClose = () => {
    modalVisibleHandler(false);
  };

  const onMenuPress = () => {
    navigation?.navigate('Settings');
  };

  const createTaskHandler = (data: FieldValues) => {
    if (taskId) {
      updateTask({ ...data, _id: taskId } as UpdateTaskData);
    } else {
      createTask(data as CreateTaskData);
    }
    fetchList();
    modalVisibleHandler(false);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={style.mainWrapper}>
        {withHeader && <Header onSettingsPress={onMenuPress} />}
        <View style={style.contentWrapper}>{children}</View>
        <ModalComponent visible={visible} onRequestClose={handleModalClose}>
          <CreateTaskForm editItemId={taskId} onSubmit={createTaskHandler} />
        </ModalComponent>
      </View>
    </SafeAreaView>
  );
};