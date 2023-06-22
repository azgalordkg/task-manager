import { isRejected, Middleware } from '@reduxjs/toolkit';
import { t } from 'i18next';
import Toast from 'react-native-toast-message';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  console.log(action, 'isRejected(action)');
  if (isRejected(action)) {
    console.log(123);
    // Toast.show({
    //   type: 'error',
    //   text1: `${t(action?.payload?.data?.message)}`,
    // });
  }

  return next(action);
};
