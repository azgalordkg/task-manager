import React, { FC, PropsWithChildren } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

import { ArrowAngle, Checkmark } from '@/components/icons';
import { BreakLine } from '@/components/ui';
import { COLORS } from '@/constants';
import { vibrate } from '@/utils';

import styles from './MenuItem.styles';
import { Props } from './MenuItem.types';

export const MenuItem: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  isSwitcher,
  isArrow,
  isCheckMark,
  onToggleSwitch,
  switcherValue,
  checkMarkValue,
  themeValue,
}) => {
  const onValueChangePress = (currentValue: boolean) => {
    vibrate();
    onToggleSwitch?.(currentValue);
  };

  const checkMarkColor =
    themeValue === checkMarkValue ? COLORS.DARK_GREEN : 'transparent';

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>{children}</Text>
        {isSwitcher && (
          <Switch
            trackColor={{ false: COLORS.GREY, true: COLORS.DARK_GREEN }}
            thumbColor={COLORS.WHITE}
            ios_backgroundColor={COLORS.GREY}
            onValueChange={onValueChangePress}
            value={switcherValue}
          />
        )}
        {isArrow && <ArrowAngle />}
        {isCheckMark && <Checkmark color={checkMarkColor} />}
      </View>
      <BreakLine color={COLORS.GREY} />
    </TouchableOpacity>
  );
};
