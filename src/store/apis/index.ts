import { authApi, authSlice } from './auth';
import { labelsApi } from './labels';
import labelSlice from './labels/labels.slice';
import { tasksApi } from './tasks';
import { usersApi } from './users';
import taskSlice from './tasks/task.slice';

export const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [labelsApi.reducerPath]: labelsApi.reducer,

  [authSlice.name]: authSlice.reducer,
  [taskSlice.name]: taskSlice.reducer,
  [labelSlice.name]: labelSlice.reducer,
};

export const queryMiddleware = [
  authApi.middleware,
  tasksApi.middleware,
  usersApi.middleware,
  labelsApi.middleware,
];
