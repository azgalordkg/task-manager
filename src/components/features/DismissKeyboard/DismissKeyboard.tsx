import React, { FC, PropsWithChildren } from 'react';
import { Keyboard, Pressable } from 'react-native';

import styles from './DismissKeyboard.styles';

export const DismissKeyboard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      {children}
    </Pressable>
  );
};
