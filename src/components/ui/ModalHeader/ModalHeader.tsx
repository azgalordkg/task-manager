import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { AccentButton } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './ModalHeader.styles';
import { Props } from './ModalHeader.types';

export const ModalHeader: FC<Props> = ({
  onCancelPress,
  cancelText = 'Close',
  rightActionComponent,
  onDonePress,
  isDoneDisabled,
  doneText,
  title,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <>
      <View style={style.closerWrapper}>
        <View style={style.closer} />
      </View>
      <View style={style.header}>
        <AccentButton onPress={onCancelPress}>{cancelText}</AccentButton>
        <Text style={style.title}>{title}</Text>
        {rightActionComponent}
        {onDonePress && (
          <AccentButton
            isBold
            isDoneDisabled={isDoneDisabled}
            onPress={onDonePress}>
            {doneText}
          </AccentButton>
        )}
      </View>
    </>
  );
};
