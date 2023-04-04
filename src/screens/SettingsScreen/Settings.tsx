import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui/MenuItem';
import { ScreenProps } from '@/types';

import styles from './Settings.styles';

export const Settings: FC<ScreenProps<'Settings'>> = ({ navigation }) => {
  // const [isNotification, setIsNotification] = useState(true);
  // const onNotificationSwitchHandler = (value: boolean) => {
  //   setIsNotification(value);
  // };

  const { t } = useTranslation();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <MainLayout
      screenTitle={`${t('SETTINGS_SCREEN_TITLE')}`}
      onBack={onBackPressHandler}>
      <View style={styles.contentWrapper}>
        <View style={styles.listWrapper}>
          <MenuItem onPress={() => navigation.navigate('TagsSettings')}>
            {t('TAGS')}
          </MenuItem>
          <MenuItem onPress={() => navigation.navigate('Language')}>
            {t('LANGUAGE')}
          </MenuItem>
          <MenuItem onPress={() => navigation.navigate('Theme')}>
            {t('THEME')}
          </MenuItem>
          {/*<MenuItem
            value={isNotification}
            onToggleSwitch={onNotificationSwitchHandler}
            isSwitcher>
            {t('NOTIFICATIONS')}
          </MenuItem>*/}
          <MenuItem
            onPress={() => {
              navigation.navigate('AboutUs');
            }}>
            {t('ABOUT_US')}
          </MenuItem>
          {/*<MenuItem
            icon={Crown}
            color={COLORS.YELLOW}
            onPress={() => {
              navigation.navigate('Purchase');
            }}>
            //TODO спросить как лучше перевести
            Upgrade
          </MenuItem>*/}
        </View>
      </View>
    </MainLayout>
  );
};
