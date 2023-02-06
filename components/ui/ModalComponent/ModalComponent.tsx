import * as React from 'react';
import {FC} from 'react';
import {Modal, Pressable, View} from 'react-native';
import {Props} from './ModalComponent.types';
import styles from './ModalComponent.styles';

export const ModalComponent: FC<Props> = ({
  visible,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <Pressable onPress={onRequestClose} style={styles.closeArea} />
        <View style={styles.wrapper}>{children}</View>
      </View>
    </Modal>
  );
};
