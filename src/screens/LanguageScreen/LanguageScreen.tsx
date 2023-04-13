import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { CheckMark } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui';
import { LANGUAGES_LIST } from '@/constants';
import { useLanguageContext, useThemeContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

import styles from './LanguageScreen.styles';

export const LanguageScreen: FC<ScreenProps<'Language'>> = ({ navigation }) => {
  const { i18n, t } = useTranslation();
  const { languageHandleChange } = useLanguageContext();
  const { theme } = useThemeContext();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const languageColorHandler = (type: string) => {
    return i18n.language === type ? theme.BUTTONS.PRIMARY : 'transparent';
  };

  return (
    <MainLayout
      screenTitle={`${t('LANGUAGES_SCREEN_TITLE')}`}
      onBack={onBackPressHandler}>
      <View style={styles.mainWrapper}>
        <View style={styles.listWrapper}>
          {LANGUAGES_LIST.map(({ value, label }, index) => (
            <MenuItem
              key={value}
              isLast={index === LANGUAGES_LIST.length - 1}
              isFirst={index === 0}
              onPress={() => languageHandleChange(value)}
              color={languageColorHandler(value)}
              icon={CheckMark}>
              {label}
            </MenuItem>
          ))}
        </View>
      </View>
    </MainLayout>
  );
};
