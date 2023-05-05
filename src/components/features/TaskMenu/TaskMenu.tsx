import React, { FC, useEffect } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';

import { Dots } from '@/components/icons';
import { useThemeContext } from '@/context/hooks';

import { TaskManagerPopup } from '../TaskManagerPopup';
import { Props } from './TaskMenu.types';

export const TaskMenu: FC<Props> = ({
  handleModalVisible,
  scale,
  handleDeleteTask,
  taskManagerVisible,
}) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    Animated.timing(scale, {
      toValue: taskManagerVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [taskManagerVisible]);

  return (
    <OutsidePressHandler
      disabled={false}
      onOutsidePress={() => {
        taskManagerVisible && handleModalVisible();
      }}>
      <TouchableOpacity onPress={handleModalVisible}>
        <Dots color={theme.ICONS.SECONDARY} />
      </TouchableOpacity>

      <TaskManagerPopup scale={scale} handleDeleteTask={handleDeleteTask} />
    </OutsidePressHandler>
  );
};
