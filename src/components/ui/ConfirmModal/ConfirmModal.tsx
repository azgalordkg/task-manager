import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { Props } from '@/components/ui/ConfirmModal/ConfirmModal.types';

import styles from './ConfirmModal.styles';

export const ConfirmModal: FC<Props> = ({
  visible,
  title,
  description,
  confirmButtonLabel = 'Confirm',
  dismissButtonLabel = 'Cancel',
  onPressConfirm,
  onPressDismiss,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressDismiss}
      style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{title}</Text>

        <Text style={styles.modalDescription}>{description}</Text>

        <View style={styles.modalButtonContainer}>
          <CustomButton width={'50%'} onPress={onPressConfirm}>
            {confirmButtonLabel}
          </CustomButton>
          <CustomButton width={'50%'} onPress={onPressDismiss}>
            {dismissButtonLabel}
          </CustomButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};
