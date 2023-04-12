import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
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

  const style = styles(theme);

  return (
    <View style={style.contentWrapper}>
      <View style={style.fieldsWrapper}>{children}</View>

      <CustomButton
        height={46}
        fullWidth
        bgColor={COLORS.GREEN}
        onPress={onSubmitPress}
        disabled={isSubmitDisabled}>
        {submitTitle}
      </CustomButton>
    </View>
  );
};
