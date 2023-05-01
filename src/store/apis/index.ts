import { rtkQueryApi } from '@/store/requests/tasksApi/tasksApi';

export const queryReducer = {
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
};

export const queryMiddleware = [rtkQueryApi.middleware];
