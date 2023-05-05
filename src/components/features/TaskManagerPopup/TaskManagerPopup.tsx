import React, { FC } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import { Plus, Trash } from '@/components/icons';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { getTaskManagerTransform } from '@/services';

import styles from './TaskManagerPopup.styles';
import { Props } from './TaskManagerPopup.types';
export const TaskManagerPopup: FC<Props> = ({ scale, handleDeleteTask }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <Animated.View style={[style.mainWrapper, getTaskManagerTransform(scale)]}>
      <TouchableOpacity style={style.controlElementButton}>
        <Text style={style.controlElementText}>Duplicate Task</Text>
        <View style={style.controlElementIcon}>
          <Plus width={15} height={15} color={theme.ICONS.PRIMARY} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDeleteTask}
        style={[style.controlElementButton, style.controlElementDelete]}>
        <Text style={[style.controlElementText, { color: COLORS.RED }]}>
          Delete Task
        </Text>
        <View style={style.controlElementIcon}>
          <Trash width={20} height={20} color={COLORS.RED} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
