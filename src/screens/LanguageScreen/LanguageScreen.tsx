import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Checkmark } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui';
import { COLORS } from '@/constants';
import { useLanguageContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

import styles from './LanguageScreen.styles';

export const LanguageScreen: FC<ScreenProps<'Language'>> = ({ navigation }) => {
  const { i18n, t } = useTranslation();
  const { languageHandleChange } = useLanguageContext();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const languageColorHandler = (type: string) => {
    return i18n.language === type ? COLORS.GREEN : 'transparent';
  };

  return (
    <MainLayout
      screenTitle={`${t('LANGUAGES_SCREEN_TITLE')}`}
      onBack={onBackPressHandler}>
      <View style={styles.contentWrapper}>
        <View style={styles.listWrapper}>
          <MenuItem
            onPress={() => languageHandleChange('en')}
            color={languageColorHandler('en')}
            icon={Checkmark}>
            English
          </MenuItem>
          <MenuItem
            onPress={() => languageHandleChange('ru')}
            color={languageColorHandler('ru')}
            icon={Checkmark}>
            Русский
          </MenuItem>
          <MenuItem
            onPress={() => languageHandleChange('es')}
            color={languageColorHandler('es')}
            icon={Checkmark}>
            Español
          </MenuItem>
          <MenuItem
            onPress={() => languageHandleChange('fr')}
            color={languageColorHandler('fr')}
            icon={Checkmark}>
            Français
          </MenuItem>
          <MenuItem
            onPress={() => languageHandleChange('de')}
            color={languageColorHandler('de')}
            icon={Checkmark}>
            Deutsch
          </MenuItem>
        </View>
      </View>
    </MainLayout>
  );
};
