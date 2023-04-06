import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { EmptyTasksPlaceholder } from '@/components/icons';

import styles from './EmptyTaskList.styles';
import { Props } from './EmptyTaskList.types';

export const EmptyTaskList: FC<Props> = ({ handleCreatePress }) => {
  return (
    <View style={styles.contentWrapper}>
      <EmptyTasksPlaceholder />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Not much to do yet</Text>
        <TouchableOpacity onPress={handleCreatePress}>
          <Text style={styles.link}>Let’s Create a Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
