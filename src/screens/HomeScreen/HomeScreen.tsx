import { useIsFocused } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { TaskList } from '@/components/features';
import { Plus } from '@/components/icons';
import { MainLayout } from '@/components/Layouts';
import { COLORS } from '@/constants';
import { useTaskModalContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

import styles from './HomeScreen.styles';

export const HomeScreen: FC<ScreenProps<'Home'>> = ({ navigation }) => {
  const { taskList, fetchList, onSetTaskIdHandler, modalVisibleHandler } =
    useTaskModalContext();
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
    onSetTaskIdHandler(id);
    modalVisibleHandler(true);
  };

  const handleCreatePress = () => {
    onSetTaskIdHandler(undefined);
    modalVisibleHandler(true);
  };

  return (
    <MainLayout withHeader navigation={navigation}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.contentWrapper}>
          <TaskList
            onItemPress={handleItemPress}
            onEditPress={handleEditPress}
            fetchList={fetchList}
            list={taskList}
          />
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
        <View style={styles.buttonWrapper}>
          <Plus color={COLORS.BG} width={20} height={20} />
        </View>
      </TouchableOpacity>
    </MainLayout>
  );
};
