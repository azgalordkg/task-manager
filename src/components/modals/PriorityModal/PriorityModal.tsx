import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ArrowUpSquare, CheckMark } from '@/components/icons';
import { ActionModalWrapper, CustomButton, MenuItem } from '@/components/ui';
import { PRIORITIES } from '@/constants/tasks';
import { useThemeContext } from '@/context/hooks';

import { Props } from './PriorityModal.types';

export const PriorityModal: FC<Props> = ({
  visible,
  onPressDismiss,
  activePriorityId,
  onValueChange,
}) => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  return (
    <ActionModalWrapper visible={visible} onPressDismiss={onPressDismiss}>
      <View>
        {PRIORITIES.map(({ id, label, color }, index) => (
          <MenuItem
            onPress={() => onValueChange(id)}
            prependIcon={ArrowUpSquare}
            prependIconColor={color}
            isFirst={index === 0}
            isLast={index === PRIORITIES.length - 1}
            color={theme.BUTTONS_PRIMARY}
            icon={activePriorityId === id ? CheckMark : null}
            key={id}>
            {`${t('PRIORITY')} ${t(label)}`}
          </MenuItem>
        ))}
      </View>
      <CustomButton
        bgColor={theme.BUTTONS_SECONDARY}
        textColor={theme.TEXT_SECONDARY}
        height={46}
        width={'100%'}
        onPress={onPressDismiss}>
        {t('CANCEL_BUTTON')}
      </CustomButton>
    </ActionModalWrapper>
  );
};
