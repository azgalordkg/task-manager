import React, { FC, PropsWithChildren } from 'react';
import { Switch, Text, View } from 'react-native';

import { COLORS } from '@/constants';
import { vibrate } from '@/services';

import styles from './ToggleableMenuItem.styles';
import { Props } from './ToggleableMenuItem.types';

export const ToggleableMenuItem: FC<PropsWithChildren<Props>> = ({
  icon,
  children,
  onToggleSwitch,
  value,
}) => {
  const Icon = icon;

  const onValueChangePress = (currentValue: boolean) => {
    vibrate();
    onToggleSwitch(currentValue);
  };

  return (
    <View style={styles.contentWrapper}>
      <Icon style={styles.icon} width={20} height={20} />
      <Text style={styles.text}>{children}</Text>
      <Switch
        trackColor={{ false: COLORS.GREY, true: COLORS.DARK_GREEN }}
        thumbColor={COLORS.WHITE}
        ios_backgroundColor={COLORS.GREY}
        onValueChange={onValueChangePress}
        value={value}
      />
    </View>
  );
};
