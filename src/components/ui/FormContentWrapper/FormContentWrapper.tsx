import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Trash } from '@/components/icons';
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
  onDeletePress,
}) => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.titleWrapper}>
        {title && <Text style={styles.title}>{title}</Text>}
        {onDeletePress && (
          <TouchableOpacity onPress={onDeletePress} style={styles.deleteButton}>
            <Trash color={COLORS.RED} height={26} width={24} />
          </TouchableOpacity>
        )}
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
