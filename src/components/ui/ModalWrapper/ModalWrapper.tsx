import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';

import { COLORS } from '@/constants';

import { CustomButton } from '../CustomButton';
import styles from './ModalWrapper.styles';
import { Props } from './ModalWrapper.types';

export const ModalWrapper: FC<Props> = ({
  onRequestClose,
  children,
  closeText = 'Cancel',
}) => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.closerWrapper}>
        <View style={styles.closer} />
      </View>
      {children}
      <View style={styles.footer}>
        <CustomButton
          bgColor={COLORS.BUTTON_BG}
          textColor={COLORS.BG}
          fullWidth
          onPress={onRequestClose}>
          {closeText}
        </CustomButton>
      </View>
    </View>
  );
};
