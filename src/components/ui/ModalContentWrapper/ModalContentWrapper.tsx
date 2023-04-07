import React, { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import { AccentButton } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './ModalContentWrapper.styles';
import { Props } from './ModalContentWrapper.types';

export const ModalContentWrapper: FC<PropsWithChildren<Props>> = ({
  onCancelPress,
  onDonePress,
  cancelText = 'Cancel',
  doneText = 'Done',
  title,
  children,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  return (
    <View style={style.container}>
      <View style={style.header}>
        {onCancelPress && (
          <AccentButton onPress={onCancelPress}>{cancelText}</AccentButton>
        )}
        <Text style={style.title}>{title}</Text>
        {onDonePress && (
          <AccentButton onPress={onDonePress}>{doneText}</AccentButton>
        )}
      </View>
      {children}
    </View>
  );
};
