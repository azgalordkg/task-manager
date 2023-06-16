import { authApi } from '@/store/apis/auth';
import authSlice from '@/store/apis/auth/auth.slice';
import taskSlice from '@/store/apis/tasks/task.slice';
import { labelsApi } from '@/store/apis/labels';
import labelSlice from '@/store/apis/labels/labels.slice';

import { tasksApi } from './tasks';

export const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  [labelsApi.reducerPath]: labelsApi.reducer,

  [authSlice.name]: authSlice.reducer,
  [taskSlice.name]: taskSlice.reducer,
  [labelSlice.name]: labelSlice.reducer,
};

export const queryMiddleware = [
  authApi.middleware,
  tasksApi.middleware,
  labelsApi.middleware,
];
