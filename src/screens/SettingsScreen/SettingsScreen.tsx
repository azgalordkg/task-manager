import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, Platform, View } from 'react-native';
import Rate, { AndroidMarket } from 'react-native-rate';

import { MainLayout } from '@/components/layouts';
import { CustomButton } from '@/components/ui';
import { MenuItem } from '@/components/ui/MenuItem';
import { SETTINGS_LIST } from '@/constants';
import { useLogout } from '@/hooks';
import { ScreenProps } from '@/types';

import styles from './SettingsScreen.styles';

export const SettingsScreen: FC<ScreenProps<'Settings'>> = ({ navigation }) => {
  const { t } = useTranslation();
  const { logout } = useLogout();

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const handleContactUsPress = () => {
    const email = 'aza.alt.com@gmail.com';
    const subject = 'Contact Us';
    const body = 'Please describe your issue or question:';

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

    Linking.canOpenURL(mailtoUrl)
      .then(supported => {
        if (!supported) {
          console.error("Can't handle url: " + mailtoUrl);
        } else {
          return Linking.openURL(mailtoUrl);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  const handleRateUs = () => {
    const appleAppID = '6446996825';
    const androidPackageName = 'your-android-package-name';

    if (__DEV__) {
      const url =
        Platform.OS === 'ios'
          ? `https://apps.apple.com/app/id${appleAppID}`
          : `https://play.google.com/store/apps/details?id=${androidPackageName}`;

      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err),
      );
    } else {
      // Use react-native-rate for production build
      const options = {
        AppleAppID: appleAppID,
        GooglePackageName: androidPackageName,
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: false,
        openAppStoreIfInAppFails: true,
      };

      Rate.rate(options, success => {
        if (success) {
          console.log('User successfully redirected to the App Store.');
        }
      });
    }
  };

  return (
    <MainLayout
      screenTitle={`${t('SETTINGS_SCREEN_TITLE')}`}
      showHeader
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
                  if (navigationName === 'RateUs') {
                    handleRateUs();
                  } else if (navigationName === 'ContactUs') {
                    handleContactUsPress();
                  } else {
                    // @ts-ignore TODO solve later
                    navigation.navigate(navigationName);
                  }
                }}>
                {t(title)}
              </MenuItem>
            ),
          )}
        </View>
        {/* TODO remove this button after User Account Implementation */}
        <CustomButton onPress={logout}>Log Out</CustomButton>
      </View>
    </MainLayout>
  );
};
