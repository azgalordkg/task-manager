import { isRejected, Middleware } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejected(action)) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
    });
  }

  return next(action);
};
