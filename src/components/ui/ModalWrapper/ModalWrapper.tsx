import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';

import { useThemeContext } from '@/context/hooks';

import { CustomButton } from '../CustomButton';
import styles from './ModalWrapper.styles';
import { Props } from './ModalWrapper.types';

export const ModalWrapper: FC<Props> = ({
  onRequestClose,
  children,
  closeText = 'Cancel',
  responsiveHeight,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme, responsiveHeight);

  return (
    <View style={style.container}>
      <View style={style.contentWrapper}>
        <View style={style.closerWrapper}>
          <View style={style.closer} />
        </View>
        {children}
        <View style={style.footer}>
          <CustomButton
            bgColor={theme.BUTTONS_SECONDARY}
            textColor={theme.TEXT_PRIMARY}
            fullWidth
            onPress={onRequestClose}>
            {closeText}
          </CustomButton>
        </View>
      </View>
    </View>
  );
};
