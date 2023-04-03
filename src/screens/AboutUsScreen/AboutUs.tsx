import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { BreakLine, MenuItem } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

import styles from './AboutUs.styles';

export const AboutUs: FC<ScreenProps<'AboutUs'>> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  const { goBack } = useNavigation();
  const { t } = useTranslation();

  const handleClose = () => goBack();

  return (
    <MainLayout
      screenTitle={`${t('ABOUT_US_SCREEN_TITLE')}`}
      onBack={handleClose}>
      <View style={style.contentWrapper}>
        <View style={style.contentContainer}>
          <Text style={style.screenTitle}>{t('ABOUT_US_TITLE')}</Text>

          <BreakLine color={COLORS.GREY_DARK} />

          <Text style={style.screenDescription}>
            {t('ABOUT_US_DESCRIPTION_PART_ONE')}
          </Text>

          <Text style={style.screenDescription}>
            {t('ABOUT_US_DESCRIPTION_PART_ONE')}
          </Text>

          <View style={style.footerContainer}>
            <MenuItem
              onPress={() =>
                navigation.navigate('Documents', { isPrivacyPolicy: true })
              }>
              {t('PRIVACY_POLICY')}
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('Documents')}>
              {t('TERMS_OF_USE')}
            </MenuItem>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
