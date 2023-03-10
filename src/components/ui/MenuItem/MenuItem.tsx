import React, { FC, PropsWithChildren } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

import { ArrowAngle } from '@/components/icons';
import { BreakLine } from '@/components/ui';
import { COLORS } from '@/constants';
import { vibrate } from '@/utils';

import styles from './MenuItem.styles';
import { Props } from './MenuItem.types';

export const MenuItem: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  isSwitcher,
  onToggleSwitch,
  value,
  color,
  icon = ArrowAngle,
}) => {
  const Icon = icon;
  const onValueChangePress = (currentValue: boolean) => {
    vibrate();
    onToggleSwitch?.(currentValue);
  };

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>{children}</Text>
        {isSwitcher ? (
          <Switch
            trackColor={{ false: COLORS.WHITE_DARK, true: COLORS.GREEN }}
            thumbColor={COLORS.WHITE_LIGHT}
            ios_backgroundColor={COLORS.WHITE_DARK}
            onValueChange={onValueChangePress}
            value={value}
          />
        ) : (
          <Icon color={color} />
        )}
      </View>
      <BreakLine color={COLORS.WHITE_DARK} />
    </TouchableOpacity>
  );
};
