import React, { FC } from 'react';
import { View } from 'react-native';

import { Checkmark } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { BackButtonHeader, MenuItem } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks/useThemeContext';
import { ScreenProps } from '@/types';

import styles from './Theme.styles';

export const Theme: FC<ScreenProps<'Theme'>> = ({ navigation }) => {
  const { activeTheme, themeHandleChange } = useThemeContext();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const colorHandler = (type: string) => {
    return activeTheme === type ? COLORS.DARK_GREEN : 'transparent';
  };

  return (
    <MainLayout>
      <View style={styles.themeWrapper}>
        <BackButtonHeader title="Theme" onPress={onBackPressHandler} />

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
