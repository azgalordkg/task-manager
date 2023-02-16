import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Alarm, Cross, Info, Logo, Setting, Sun } from '@/components/icons';
import { BreakLine, ToggleableMenuItem } from '@/components/ui';
import { MenuItem } from '@/components/ui/MenuItem';
import { COLORS } from '@/constants';

import styles from './CustomDrawer.styles';

export const CustomDrawer: FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);

  const onSettingsPress = () => {
    navigation.navigate('Main', {
      screen: 'Settings',
    });
  };

  const onAboutUsPress = () => {
    navigation.navigate('Main', {
      screen: 'AboutUs',
    });
  };

  const onClosePress = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity onPress={onClosePress} style={styles.closeBtn}>
          <Cross color={COLORS.WHITE} />
        </TouchableOpacity>
        <View style={styles.menuItemWrapper}>
          <ToggleableMenuItem
            value={isLightMode}
            onToggleSwitch={setIsLightMode}
            icon={Sun}>
            Light mode
          </ToggleableMenuItem>
        </View>
        <View style={styles.menuItemWrapper}>
          <ToggleableMenuItem
            value={isNotifications}
            onToggleSwitch={setIsNotifications}
            icon={Alarm}>
            Notifications
          </ToggleableMenuItem>
        </View>
        <BreakLine marginBottom={30} />
        <View style={styles.menuItemWrapper}>
          <MenuItem onPress={onSettingsPress} icon={Setting}>
            Settings
          </MenuItem>
        </View>
        <View style={styles.menuItemWrapper}>
          <MenuItem onPress={onAboutUsPress} icon={Info}>
            About Us
          </MenuItem>
        </View>
      </View>
      <View style={styles.logoWrapper}>
        <Logo width={140} height={25} />
      </View>
    </View>
  );
};
