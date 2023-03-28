import React, { FC } from 'react';
import { View } from 'react-native';

import { Checkmark } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks/useThemeContext';
import { ScreenProps } from '@/types';

import styles from './ThemeScreen.styles';

export const ThemeScreen: FC<ScreenProps<'Theme'>> = ({ navigation }) => {
  const { activeTheme, themeHandleChange } = useThemeContext();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const colorHandler = (type: string) => {
    return activeTheme === type ? COLORS.GREEN : 'transparent';
  };

  return (
    <MainLayout onBack={onBackPressHandler} screenTitle="Theme">
      <View style={styles.themeWrapper}>
        <View style={styles.themeContainer}>
          <MenuItem
            color={colorHandler('dark')}
            onPress={() => themeHandleChange('dark')}
            icon={Checkmark}>
            Dark Theme
          </MenuItem>

          <MenuItem
            color={colorHandler('light')}
            onPress={() => themeHandleChange('light')}
            icon={Checkmark}>
            Light Theme
          </MenuItem>
          <MenuItem
            color={colorHandler('system')}
            onPress={() => themeHandleChange('system')}
            icon={Checkmark}>
            System Theme
          </MenuItem>
        </View>
      </View>
    </MainLayout>
  );
};
