import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <View style={style.mainWrapper}>
      {isUnscheduled ? <UnscheduledPlaceholder /> : <TasksPlaceholder />}
      <View style={style.textContainer}>
        <Text style={style.title}>{t('NOT_MUCH')}</Text>
        <TouchableOpacity onPress={handleCreatePress}>
          <Text style={style.link}>{t('LETS_CREATE')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
