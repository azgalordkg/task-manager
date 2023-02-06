import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import {Props} from './Input.types';
import {useController} from 'react-hook-form';
import styles from './Input.styles';
import {COLORS} from '../../../constants';

export const Input: FC<Props> = ({
  control,
  defaultValue = '',
  name,
  ...props
}) => {
  const {field} = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholderTextColor={COLORS.GREY}
        style={styles.input}
        value={field.value}
        onChangeText={field.onChange}
        {...props}
      />
    </View>
  );
};
