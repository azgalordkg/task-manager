import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Input } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './InputButton.styles';
import { Props } from './InputButton.types';

export const InputButton: FC<Props> = ({
  onPress,
  placeholder,
  name,
  value,
  control,
  icon,
}) => {
  const { theme } = useThemeContext();

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress} />
      <Input
        placeholder={placeholder}
        color={theme.TEXT.PRIMARY}
        editable={false}
        value={value}
        backgroundColor={theme.INPUTS.PRIMARY}
        borderColor={theme.INPUTS.PRIMARY}
        control={control}
        name={name}
        icon={icon}
      />
    </View>
  );
};
