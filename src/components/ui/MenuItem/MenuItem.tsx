import React, { FC, PropsWithChildren } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

import { ArrowAngle } from '@/components/icons';
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
  prependIcon,
  isFirst,
  isLast,
  prependIconColor,
  count,
}) => {
  const Icon = icon;
  const PrependIcon = prependIcon;
  const { theme } = useThemeContext();
  const style = styles(theme, isFirst, isLast);
  const onValueChangePress = (currentValue: boolean) => {
    vibrate();
    onToggleSwitch?.(currentValue);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={!onPress}
      onPress={onPress}>
      <View style={style.contentWrapper}>
        {PrependIcon && (
          <PrependIcon
            style={style.prependIcon}
            color={prependIconColor || theme.BUTTONS_PRIMARY}
          />
        )}
        <Text style={style.text}>{children}</Text>

        {count !== undefined && <Text style={style.count}>{count}</Text>}
        {isSwitcher && (
          <Switch
            trackColor={{ false: COLORS.GREY_LIGHT, true: COLORS.GREEN }}
            thumbColor={COLORS.WHITE}
            ios_backgroundColor={COLORS.GREY_LIGHT}
            onValueChange={onValueChangePress}
            value={value}
          />
        )}
        {Icon && <Icon color={color || COLORS.GREY_ICONS} />}
      </View>
    </TouchableOpacity>
  );
};
