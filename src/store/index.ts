import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { queryMiddleware, queryReducer } from './apis';
import { rtkQueryErrorLogger } from './middlewares';

export const store = configureStore({
  reducer: {
    ...queryReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger, ...queryMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
