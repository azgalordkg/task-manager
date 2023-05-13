import { authApi, authSlice } from './auth';
import { tasksApi } from './tasks';
import { usersApi } from './users';

export const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,

  [authSlice.name]: authSlice.reducer,
};

export const queryMiddleware = [
  authApi.middleware,
  tasksApi.middleware,
  usersApi.middleware,
];
