import React, { FC } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { vibrate } from '@/utils';

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

  const handleConfirmPress = () => {
    vibrate();
    onPressConfirm();
  };

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
            bgColor={COLORS.WHITE_MEDIUM}
            textColor={COLORS.RED}
            height={46}
            width={'100%'}
            onPress={handleConfirmPress}>
            {confirmLabel}
          </CustomButton>
          <CustomButton
            bgColor={theme.BUTTONS_SECONDARY}
            textColor={theme.TEXT_SECONDARY}
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
