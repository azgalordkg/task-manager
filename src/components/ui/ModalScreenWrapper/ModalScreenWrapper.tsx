import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';

import { ModalHeader } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './ModalScreenWrapper.styles';
import { Props } from './ModalScreenWrapper.types';

export const ModalScreenWrapper: FC<Props> = ({
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
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme, responsiveHeight);

  return (
    <View style={style.container}>
      <View style={style.contentWrapper}>
        <ModalHeader
          title={title}
          rightActionComponent={rightActionComponent}
          onCancelPress={onCancelPress}
          onDonePress={onDonePress}
          isDoneDisabled={isDoneDisabled}
          cancelText={cancelText}
          doneText={doneText}
        />
        {children}
      </View>
    </View>
  );
};
