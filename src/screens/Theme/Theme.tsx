import React, { FC } from 'react';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { BackButtonHeader, MenuItem } from '@/components/ui';
import { useThemeContext } from '@/context/hooks/useThemeContext';
import { ScreenProps } from '@/types';

import styles from './Theme.styles';

export const Theme: FC<ScreenProps<'Theme'>> = ({ navigation }) => {
  const { activeTheme, themeHandleChange } = useThemeContext();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <MainLayout>
      <View style={styles.themeWrapper}>
        <BackButtonHeader title="Theme" onPress={onBackPressHandler} />

        <View style={styles.themeContainer}>
          <MenuItem
            themeValue={activeTheme}
            isCheckMark
            checkMarkValue={'dark'}
            onPress={() => themeHandleChange('dark')}>
            Dark Theme
          </MenuItem>

          <MenuItem
            themeValue={activeTheme}
            isCheckMark
            checkMarkValue={'light'}
            onPress={() => themeHandleChange('light')}>
            Light Theme
          </MenuItem>

          <MenuItem
            themeValue={activeTheme}
            isCheckMark
            checkMarkValue={'system'}
            onPress={() => themeHandleChange('system')}>
            System Theme
          </MenuItem>
        </View>
      </View>
    </MainLayout>
  );
};
