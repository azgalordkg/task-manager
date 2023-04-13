import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui/MenuItem';
import { SETTINGS_LIST } from '@/constants';
import { ScreenProps } from '@/types';

import styles from './SettingsScreen.styles';

export const SettingsScreen: FC<ScreenProps<'Settings'>> = ({ navigation }) => {
  const { t } = useTranslation();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <MainLayout
      screenTitle={`${t('SETTINGS_SCREEN_TITLE')}`}
      onBack={onBackPressHandler}>
      <View style={styles.mainWrapper}>
        <View style={styles.listWrapper}>
          {SETTINGS_LIST.map(
            ({ prependIcon, title, navigationName }, index) => (
              <MenuItem
                key={title}
                isLast={index === SETTINGS_LIST.length - 1}
                isFirst={index === 0}
                prependIcon={prependIcon}
                onPress={() => {
                  if (navigationName !== 'RateUs') {
                    // @ts-ignore TODO solve later
                    navigation.navigate(navigationName);
                  }
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
