import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui';
import { DASHBOARD_LIST } from '@/constants/dashboard';
import { useTasksContext } from '@/context/hooks';
import { RootStackParamList, ScreenProps } from '@/types';

import styles from './DashboardScreen.styles';

export const DashboardScreen: FC<ScreenProps<'Dashboard'>> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const { taskList, unscheduledTaskList, fetchList } = useTasksContext();

  useEffect(() => {
    fetchList();
    navigation.navigate('Tasks');
  }, []);

  const getCount = (title: string) => {
    switch (title) {
      case 'TODAY':
        return taskList.length;
      case 'UNSCHEDULED':
        return unscheduledTaskList.length;
      default:
        return undefined;
    }
  };

  const onDashboardItemPress = (title: string, navigationName: string) => {
    if (title === 'UNSCHEDULED') {
      navigation.navigate('Tasks', { isUnscheduled: true });
    } else {
      navigation.navigate(navigationName as keyof RootStackParamList);
    }
  };

  return (
    <MainLayout screenTitle={`${t('DASHBOARD')}`} isSettings>
      <View style={styles.mainWrapper}>
        <View style={styles.listWrapper}>
          {DASHBOARD_LIST.map(
            ({ prependIcon, title, navigationName, color }, index) => (
              <MenuItem
                key={title}
                isLast={index === DASHBOARD_LIST.length - 1}
                isFirst={index === 0}
                icon={null}
                count={getCount(title)}
                prependIconColor={color}
                prependIcon={prependIcon}
                onPress={() => onDashboardItemPress(title, navigationName)}>
                {t(title)}
              </MenuItem>
            ),
          )}
        </View>
      </View>
    </MainLayout>
  );
};
