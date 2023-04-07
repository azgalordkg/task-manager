import * as React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

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
