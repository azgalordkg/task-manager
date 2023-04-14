import * as React from 'react';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { AccentButton } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './ModalWrapper.styles';
import { Props } from './ModalWrapper.types';

export const ModalWrapper: FC<Props> = ({
  onRequestClose,
  children,
  responsiveHeight,
  onCancelPress = onRequestClose,
  onDonePress,
  isDoneDisabled,
  cancelText = 'Close',
  doneText,
  title,
  rightActionComponent,
  contentBackgroundColor,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme, responsiveHeight, contentBackgroundColor);

  return (
    <View style={style.container}>
      <View style={style.mainWrapper}>
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
        <View style={style.contentWrapper}>{children}</View>
      </View>
    </View>
  );
};
