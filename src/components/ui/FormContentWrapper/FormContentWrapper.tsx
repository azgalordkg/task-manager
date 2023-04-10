import React, { FC, PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Trash } from '@/components/icons';
import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { vibrate } from '@/utils';

import styles from './FormContentWrapper.styles';
import { Props } from './FormContentWrapper.types';

export const FormContentWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  onSubmitPress,
  isSubmitDisabled,
  submitTitle,
  onDeletePress,
}) => {
  const { theme } = useThemeContext();

  const style = styles(theme);

  return (
    <View style={style.contentWrapper}>
      <View style={style.titleWrapper}>
        {onDeletePress && (
          <TouchableOpacity
            onPress={() => {
              vibrate('selection');
              onDeletePress();
            }}
            style={style.deleteButton}>
            <Trash color={COLORS.GREY_LIGHT} height={22} width={20} />
          </TouchableOpacity>
        )}
      </View>
      <View style={style.fieldsWrapper}>{children}</View>

      <CustomButton
        fullWidth
        bgColor={COLORS.GREEN}
        onPress={onSubmitPress}
        disabled={isSubmitDisabled}>
        {submitTitle}
      </CustomButton>
    </View>
  );
};
