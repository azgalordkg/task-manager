import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ModalWrapper, ThemeItem } from '@/components/ui';
import { THEMES_MENU_ITEMS } from '@/constants';
import { useThemeContext } from '@/context/hooks/useThemeContext';
import { ScreenProps, ThemeName } from '@/types';

import styles from './ThemeScreen.styles';

export const ThemeScreen: FC<ScreenProps<'Theme'>> = ({ navigation }) => {
  const { activeTheme, themeHandleChange } = useThemeContext();
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <ModalWrapper
      contentBackgroundColor={theme.BACKGROUND.NEUTRAL}
      onRequestClose={onBackPressHandler}
      title={`${t('THEME_SCREEN_TITLE')}`}>
      <View style={styles.themeContainer}>
        {THEMES_MENU_ITEMS.map(({ color, label }) => (
          <ThemeItem
            onPress={() => themeHandleChange(label as ThemeName)}
            isActive={activeTheme === label}
            headerBackgroundColor={color}
            title={label}
          />
        ))}
      </View>
    </ModalWrapper>
  );
};
