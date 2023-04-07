import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui';
import { ITEMS_LIST } from '@/constants/dashboard';
import { useThemeContext } from '@/context/hooks';

import styles from './DashboardScreen.styles';

export const DashboardScreen = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { theme } = useThemeContext();

  return (
    <MainLayout screenTitle="Dashboard" isSettings>
      <View style={styles.contentWrapper}>
        <View style={styles.listWrapper}>
          {ITEMS_LIST.map(
            ({ prependIcon, title, navigationName, color }, index) => (
              <MenuItem
                key={title}
                isLast={index === ITEMS_LIST.length - 1}
                isFirst={index === 0}
                icon={null}
                prependIconColor={color}
                prependIcon={prependIcon}
                onPress={() => {
                  navigate(navigationName as never);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    backgroundColor: 'red',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: theme.TEXT_PRIMARY,
                      fontSize: 18,
                      alignContent: 'center',
                    }}>
                    {t(title)}
                  </Text>
                  <Text
                    style={{
                      color: theme.TEXT_PRIMARY,
                      fontSize: 18,
                      alignContent: 'center',
                    }}>
                    count
                  </Text>
                </View>
              </MenuItem>
            ),
          )}
        </View>
      </View>
    </MainLayout>
  );
};
