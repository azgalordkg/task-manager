import { DrawerNavigationHelpers } from '@react-navigation/drawer/src/types';
import { useIsFocused } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { TaskList } from '@/components/features';
import { Plus } from '@/components/icons';
import { MainLayout } from '@/components/Layouts';
import { COLORS } from '@/constants';
import { useEditedTaskIdList, useModalOpen, useTaskList } from '@/hooks';

import styles from './HomeScreen.styles';

export const HomeScreen: FC<{ navigation: DrawerNavigationHelpers }> = ({
  navigation,
}) => {
  const { taskList, fetchList } = useTaskList();
  const { setEditItemId } = useEditedTaskIdList();
  const { setCreateModalVisible } = useModalOpen();
  const isDarkMode = useColorScheme() === 'dark';
  const style = styles(isDarkMode);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchList();
    }
  }, [isFocused]);

  const handleItemPress = (id: string) => {
    navigation.navigate('Task', { id });
  };

  const handleEditPress = (id: string) => {
    setEditItemId(id);
    setCreateModalVisible(true);
  };

  const handleCreatePress = () => {
    setCreateModalVisible(true);
    setEditItemId('');
  };

  return (
    <MainLayout withMenu navigation={navigation}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={style.contentWrapper}>
          <TaskList
            onItemPress={handleItemPress}
            onEditPress={handleEditPress}
            fetchList={fetchList}
            list={taskList}
          />
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
        <View style={style.buttonWrapper}>
          <Plus color={COLORS.BG} width={20} height={20} />
        </View>
      </TouchableOpacity>
    </MainLayout>
  );
};
