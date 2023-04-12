import React, { FC } from 'react';

import { ActionModalWrapper, CustomButton } from '@/components/ui';
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
    <ActionModalWrapper visible={visible} onPressDismiss={onPressDismiss}>
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
    </ActionModalWrapper>
  );
};
