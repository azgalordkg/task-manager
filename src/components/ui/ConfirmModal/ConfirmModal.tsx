import React, { FC } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

import styles from './ConfirmModal.styles';
import { Props } from './ConfirmModal.types';

export const ConfirmModal: FC<Props> = ({
  visible,
  confirmLabel = 'Confirm',
  dismissLabel = 'Cancel',
  onPressConfirm,
  onPressDismiss,
}) => {
  const { theme } = useThemeContext();

  return (
    <Modal
      animationType="fade"
      onRequestClose={onPressDismiss}
      visible={visible}
      transparent={true}>
      <TouchableOpacity
        onPress={onPressDismiss}
        activeOpacity={1}
        style={styles.centeredView}>
        <View style={styles.modalButtonContainer}>
          <CustomButton
            bgColor={theme.BUTTONS_SECONDARY}
            textColor={COLORS.RED}
            height={46}
            width={'100%'}
            onPress={onPressConfirm}>
            {confirmLabel}
          </CustomButton>
          <CustomButton
            bgColor={COLORS.WHITE_MEDIUM}
            textColor={COLORS.BLACK_DARK}
            height={46}
            width={'100%'}
            onPress={onPressDismiss}>
            {dismissLabel}
          </CustomButton>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
