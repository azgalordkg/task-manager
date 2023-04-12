import * as React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { AccentButton } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import { CustomButton } from '../CustomButton';
import styles from './ModalWrapper.styles';
import { Props } from './ModalWrapper.types';

export const ModalWrapper: FC<Props> = ({
  onRequestClose,
  children,
  closeText,
  responsiveHeight,
  onBottomButtonPress,
  onCancelPress = onRequestClose,
  onDonePress,
  isDoneDisabled,
  cancelText = 'Close',
  doneText,
  title,
  rightActionComponent,
}) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  const style = styles(theme, responsiveHeight);

  return (
    <View style={style.container}>
      <View style={style.contentWrapper}>
        <View style={style.closerWrapper}>
          <View style={style.closer} />
        </View>
        <View style={style.header}>
          <AccentButton onPress={onCancelPress}>{cancelText}</AccentButton>
          <Text style={style.title}>{title}</Text>
          {rightActionComponent}
          {onDonePress && (
            <AccentButton
              isBold
              isDoneDisabled={isDoneDisabled}
              onPress={onDonePress}>
              {doneText}
            </AccentButton>
          )}
        </View>
        {children}
        {onBottomButtonPress && (
          <View style={style.footer}>
            <CustomButton
              bgColor={theme.BUTTONS_SECONDARY}
              textColor={theme.TEXT_PRIMARY}
              fullWidth
              onPress={onRequestClose}>
              {closeText || t('CANCEL_BUTTON')}
            </CustomButton>
          </View>
        )}
      </View>
    </View>
  );
};
