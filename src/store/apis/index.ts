import { rtkQueryApi } from './tasks';

export const queryReducer = {
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
};

export const queryMiddleware = [rtkQueryApi.middleware];
