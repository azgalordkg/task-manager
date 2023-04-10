import React, { FC, PropsWithChildren } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import styles from './ActionModalWrapper.styles';
import { Props } from './ActionModalWrapper.types';

export const ActionModalWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  onPressDismiss,
  visible,
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
        <View style={styles.modalButtonContainer}>{children}</View>
      </TouchableOpacity>
    </Modal>
  );
};
