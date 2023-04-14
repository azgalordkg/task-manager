import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './FormContentWrapper.styles';
import { Props } from './FormContentWrapper.types';

export const FormContentWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  onSubmitPress,
  isSubmitDisabled,
  submitTitle,
}) => {
  const { theme } = useThemeContext();

  const style = styles();

  return (
    <View style={style.contentWrapper}>
      <View style={style.fieldsWrapper}>{children}</View>

      <CustomButton
        height={46}
        fullWidth
        bgColor={theme.BUTTONS.PRIMARY}
        onPress={onSubmitPress}
        disabled={isSubmitDisabled}>
        {submitTitle}
      </CustomButton>
    </View>
  );
};
