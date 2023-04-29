import { rtkQueryApi } from '@/store/requests/tasksApi/tasksApi';

// Собираем все редьюсеры запросов тут

export const queryReducer = {
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
};

export const queryMiddleware = [rtkQueryApi.middleware];
