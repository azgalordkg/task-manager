import { authApi } from '@/store/apis/auth';
import authSlice from '@/store/apis/auth/auth.slice';
import taskSlice from '@/store/apis/tasks/task.slice';

import { tasksApi } from './tasks';

export const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,

  [authSlice.name]: authSlice.reducer,
  [taskSlice.name]: taskSlice.reducer,
};

export const queryMiddleware = [authApi.middleware, tasksApi.middleware];
