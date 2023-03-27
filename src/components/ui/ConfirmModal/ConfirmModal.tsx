import React, { FC } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

import styles from './ConfirmModal.styles';
import { Props } from './ConfirmModal.types';

export const ConfirmModal: FC<Props> = ({
  visible,
  confirmButtonLabel = 'Confirm',
  dismissButtonLabel = 'Cancel',
  onPressConfirm,
  onPressDismiss,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <Modal
      animationType="fade"
      onRequestClose={onPressDismiss}
      visible={visible}
      transparent={true}>
      <TouchableOpacity
        onPress={onPressDismiss}
        activeOpacity={1}
        style={style.centeredView}>
        <View style={style.modalView}>
          <View style={style.modalButtonContainer}>
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
