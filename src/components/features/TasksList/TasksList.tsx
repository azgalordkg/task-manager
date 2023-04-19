import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { TaskItem } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';
import { markTaskAsDone } from '@/services';

import styles from './TasksList.styles';
import { Props } from './TasksList.types';

export const TasksList: FC<Props> = ({
  tasks,
  onDeletePress,
  onItemPress,
  title,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  return (
    <View style={style.container}>
      {title && <Text style={style.dayTitle}>{title}</Text>}
      <View style={style.tasksWrapper}>
        {tasks?.map(task => {
          const {
            description,
            _id,
            isDone,
            name,
            repeat,
            tags,
            startDate,
            hasDeadline,
            priority,
          } = task;
          return (
            <TaskItem
              priority={priority}
              key={_id}
              description={description}
              checked={isDone}
              repeat={repeat}
              id={_id}
              name={name}
              onCheckPress={markTaskAsDone}
              onDeletePress={onDeletePress}
              isDone={isDone}
              onItemPress={onItemPress}
              tags={tags}
              startDate={startDate}
              hasDeadline={hasDeadline}
            />
          );
        })}
      </View>
    </View>
  );
};
