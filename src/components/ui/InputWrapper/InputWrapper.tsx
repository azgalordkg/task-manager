import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { COLORS } from '@/constants';

import styles from './InputWrapper.styles';
import { Props } from './InputWrapper.types';

export const InputWrapper: FC<PropsWithChildren<Props>> = ({
  errorMessage,
  icon,
  children,
}) => {
  const Icon = icon;
  const style = styles(errorMessage);

  return (
    <View style={style.wrapper}>
      {Icon && (
        <View style={style.icon}>
          <Icon color={COLORS.PLACEHOLDER} />
        </View>
      )}
      {children}
    </View>
  );
};
