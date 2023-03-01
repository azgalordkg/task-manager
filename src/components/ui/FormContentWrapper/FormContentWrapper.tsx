import React, { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './FormContentWrapper.styles';
import { Props } from './FormContentWrapper.types';

export const FormContentWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  onSubmitPress,
  isSubmitDisabled,
  submitTitle,
}) => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.fieldsWrapper}>{children}</View>

      <CustomButton
        fullWidth
        bgColor={COLORS.DARK_GREEN}
        onPress={onSubmitPress}
        disabled={isSubmitDisabled}>
        {submitTitle}
      </CustomButton>
    </View>
  );
};
