import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TasksPlaceholder, UnscheduledPlaceholder } from '@/components/icons';
import { useThemeContext } from '@/context/hooks';

import styles from './EmptyTaskList.styles';
import { Props } from './EmptyTaskList.types';

export const EmptyTaskList: FC<Props> = ({
  handleCreatePress,
  isUnscheduled,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View style={style.mainWrapper}>
      {isUnscheduled ? <UnscheduledPlaceholder /> : <TasksPlaceholder />}
      <View style={style.textContainer}>
        <Text style={style.title}>Not much to do yet</Text>
        <TouchableOpacity onPress={handleCreatePress}>
          <Text style={style.link}>Let’s Create a Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
