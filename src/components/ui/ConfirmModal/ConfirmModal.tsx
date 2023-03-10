import React, { FC } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './ConfirmModal.styles';
import { Props } from './ConfirmModal.types';

export const ConfirmModal: FC<Props> = ({
  visible,
  title,
  description,
  confirmButtonLabel = 'Confirm',
  dismissButtonLabel = 'Cancel',
  onPressConfirm,
  onPressDismiss,
}) => {
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
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalDescription}>{description}</Text>

          <View style={styles.modalButtonContainer}>
            <CustomButton
              bgColor={COLORS.WHITE_MEDIUM}
              textColor={COLORS.BLACK_DARK}
              width={'48%'}
              onPress={onPressDismiss}>
              {dismissButtonLabel}
            </CustomButton>
            <CustomButton width={'48%'} onPress={onPressConfirm}>
              {confirmButtonLabel}
            </CustomButton>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
