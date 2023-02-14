import React, { FC, PropsWithChildren } from 'react';
import { Switch, Text, View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './ToggleableMenuItem.styles';
import { Props } from './ToggleableMenuItem.types';

export const ToggleableMenuItem: FC<PropsWithChildren<Props>> = ({
  icon,
  children,
  onToggleSwitch,
  value,
}) => {
  const Icon = icon;

  return (
    <View style={styles.contentWrapper}>
      <Icon style={styles.icon} width={20} height={20} />
      <Text style={styles.text}>{children}</Text>
      <Switch
        trackColor={{ false: COLORS.GREY, true: COLORS.GREEN }}
        thumbColor={value ? COLORS.DARK_GREEN : COLORS.LIGHT_GREY}
        ios_backgroundColor={COLORS.GREY}
        onValueChange={onToggleSwitch}
        value={value}
      />
    </View>
  );
};
