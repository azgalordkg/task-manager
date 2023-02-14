import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import { DismissKeyboard } from '../../features';
import { CustomButton } from '../CustomButton';
import styles from './ModalComponent.styles';
import { Props } from './ModalComponent.types';

export const ModalComponent: FC<Props> = ({
  visible,
  onRequestClose,
  children,
}) => {
  return (
    <SwipeUpDownModal
      modalVisible={visible}
      ContentModal={
        <DismissKeyboard>
          <View style={styles.contentWrapper}>
            {children}
            <View style={styles.footer}>
              <CustomButton fullWidth type="clean" onPress={onRequestClose}>
                Close
              </CustomButton>
            </View>
          </View>
        </DismissKeyboard>
      }
      ContentModalStyle={styles.modal}
      HeaderContent={
        <View style={styles.closerWrapper}>
          <View style={styles.closer} />
        </View>
      }
      onClose={onRequestClose}
    />
  );
};
