import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './InputWrapper.styles';
import { Props } from './InputWrapper.types';

export const InputWrapper: FC<PropsWithChildren<Props>> = ({
  errorMessage,
  icon,
  children,
  borderColor = COLORS.WHITE_MEDIUM,
  backgroundColor = COLORS.WHITE_MEDIUM,
}) => {
  const Icon = icon;
  const style = styles(errorMessage, borderColor, backgroundColor);

  return (
    <View style={style.wrapper}>
      {Icon && (
        <View style={style.icon}>
          <Icon color={COLORS.WHITE_DARK} />
        </View>
      )}
      {children}
    </View>
  );
};
