import React, { FC, PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const DismissKeyboard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};