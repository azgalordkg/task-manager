import React, { FC } from 'react';

import {
  ActionModalWrapper,
  CustomButton,
  ExtendedModal,
} from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { vibrate } from '@/utils';

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
    <ExtendedModal onModalClose={onPressDismiss} isVisible={visible}>
      <ActionModalWrapper>
        <CustomButton
          bgColor={theme.BUTTONS.SECONDARY}
          textColor={COLORS.RED}
          height={46}
          width={'100%'}
          onPress={handleConfirmPress}>
          {confirmLabel}
        </CustomButton>
        <CustomButton
          bgColor={theme.BUTTONS.SECONDARY}
          textColor={theme.TEXT.PRIMARY}
          height={46}
          width={'100%'}
          onPress={onPressDismiss}>
          {dismissLabel}
        </CustomButton>
      </ActionModalWrapper>
    </ExtendedModal>
  );
};
