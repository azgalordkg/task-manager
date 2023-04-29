import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { queryMiddleware, queryReducer } from '@/store/requests';

export const store = configureStore({
  // Тут собираются все запросы и редьюсеры
  reducer: {
    ...queryReducer,
  },

  // Тут собираются все мидлвары, они нужны для кэширования запросов и т.д.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(...queryMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// setupListeners - нужен для повторной отправки запросов
setupListeners(store.dispatch);
