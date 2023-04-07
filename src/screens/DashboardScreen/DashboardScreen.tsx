import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui';
import { DASHBOARD_LIST } from '@/constants/dashboard';
import { useTaskModalContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

import styles from './DashboardScreen.styles';

export const DashboardScreen: FC<ScreenProps<'Dashboard'>> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const { taskList, fetchList } = useTaskModalContext();

  useEffect(() => {
    fetchList();
    navigation.navigate('TaskDay');
  }, []);

  const getCount = (title: string) => {
    if (title === 'TODAY') {
      return taskList.length;
    }
  };

  return (
    <MainLayout screenTitle="Dashboard" isSettings>
      <View style={styles.contentWrapper}>
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
                onPress={() => {
                  navigate(navigationName as never);
                }}>
                {t(title)}
              </MenuItem>
            ),
          )}
        </View>
      </View>
    </MainLayout>
  );
};
