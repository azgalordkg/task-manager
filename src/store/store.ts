import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rtkQueryErrorLogger } from '@/store/middlewares';
import { queryMiddleware, queryReducer } from '@/store/requests';

export const store = configureStore({
  // Тут собираются все запросы и редьюсеры
  reducer: {
    ...queryReducer,
  },

  // Тут собираются все мидлвары, они нужны для кэширования запросов, отлова ошибок и т.д.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger, ...queryMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

// setupListeners - нужен для повторной отправки запросов
setupListeners(store.dispatch);
