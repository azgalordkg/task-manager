import * as React from 'react';
import {FC} from 'react';
import {View} from 'react-native';
import {Props} from './ModalComponent.types';
import styles from './ModalComponent.styles';
// @ts-ignore
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import {DismissKeyboard} from '../../features';
import {CustomButton} from '../CustomButton';

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
          <View style={styles.container}>
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
