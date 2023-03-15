import React, { FC, PropsWithChildren } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

import { ArrowAngle } from '@/components/icons';
import { BreakLine } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
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
  const { theme } = useThemeContext();
  const style = styles(theme);
  const onValueChangePress = (currentValue: boolean) => {
    vibrate();
    onToggleSwitch?.(currentValue);
  };

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View style={style.contentWrapper}>
        <Text style={style.text}>{children}</Text>
        {isSwitcher ? (
          <Switch
            trackColor={{ false: COLORS.GREY_LIGHT, true: COLORS.GREEN }}
            thumbColor={COLORS.WHITE}
            ios_backgroundColor={COLORS.GREY_LIGHT}
            onValueChange={onValueChangePress}
            value={value}
          />
        ) : (
          <Icon color={color || theme.TEXT_PRIMARY} />
        )}
      </View>
      <BreakLine color={COLORS.GREY_LIGHT} />
    </TouchableOpacity>
  );
};
