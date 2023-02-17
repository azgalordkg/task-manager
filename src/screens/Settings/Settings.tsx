import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { BackButtonHeader } from '@/components/ui';
import { MenuItem } from '@/components/ui/MenuItem';
import { ScreenProps } from '@/types';

import styles from './Settings.styles';

export const Settings: FC<ScreenProps<'Settings'>> = ({ navigation }) => {
  const [isNotification, setIsNotification] = useState(true);

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const onNotificationSwitchHandler = (value: boolean) => {
    setIsNotification(value);
  };

  return (
    <MainLayout>
      <View style={styles.contentWrapper}>
        <BackButtonHeader title="Settings" onPress={onBackPressHandler} />

        <View style={styles.listWrapper}>
          <MenuItem onPress={() => {}}>Tags</MenuItem>
          <MenuItem onPress={() => {}}>Language</MenuItem>
          <MenuItem onPress={() => {}}>Theme</MenuItem>
          <MenuItem
            value={isNotification}
            onToggleSwitch={onNotificationSwitchHandler}
            isSwitcher>
            Notifications
          </MenuItem>
          <MenuItem onPress={() => {}}>Theme</MenuItem>
        </View>
      </View>
    </MainLayout>
  );
};
