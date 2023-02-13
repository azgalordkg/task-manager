import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Alarm, Cross, Sun } from '@/components/icons';
import { BreakLine, ToggleableMenuItem } from '@/components/ui';
import { MenuItem } from '@/components/ui/MenuItem';
import { COLORS } from '@/constants';

import styles from './CustomDrawer.styles';

export const CustomDrawer: FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const onSettingsPress = () => {
    navigation.navigate('Main', {
      screen: 'Settings',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn}>
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
          value={isLightMode}
          onToggleSwitch={setIsLightMode}
          icon={Alarm}>
          Notifications
        </ToggleableMenuItem>
      </View>
      <BreakLine />
      <View style={styles.menuItemWrapper}>
        <MenuItem onPress={onSettingsPress} icon={Alarm}>
          Settings
        </MenuItem>
      </View>
    </View>
  );
};
