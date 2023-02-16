import React, { FC, PropsWithChildren } from 'react';
import { FieldValues } from 'react-hook-form';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

import { CreateTaskForm } from '@/components/features';
import { Header, ModalComponent } from '@/components/ui';
import { COLORS } from '@/constants';
import { useEditedTaskIdList, useModalOpen, useTaskList } from '@/hooks';
import { createTask, updateTask } from '@/services/realm';
import { CreateTaskData, UpdateTaskData } from '@/types';

import styles from './MainLayout.styles';
import { Props } from './MainLayout.types';

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  navigation,
  withMenu,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { createModalVisible, setCreateModalVisible } = useModalOpen();
  const { editItemId } = useEditedTaskIdList();
  const { fetchList } = useTaskList();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  const handleModalClose = () => {
    setCreateModalVisible(false);
  };

  const onMenuPress = () => {
    navigation?.openDrawer();
  };

  const createTaskHandler = (data: FieldValues) => {
    if (editItemId) {
      updateTask({ ...data, _id: editItemId } as UpdateTaskData);
    } else {
      createTask(data as CreateTaskData);
    }
    fetchList();
    setCreateModalVisible(false);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.mainWrapper}>
        <Header withMenu={withMenu} onMenuPress={onMenuPress} />
        {children}

        <ModalComponent
          visible={createModalVisible}
          onRequestClose={handleModalClose}>
          <CreateTaskForm
            editItemId={editItemId}
            onSubmit={createTaskHandler}
          />
        </ModalComponent>
      </View>
    </SafeAreaView>
  );
};
