import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '@/constants/api';
import { ITask, ITaskCreateOrEdit } from '@/store/requests/tasksApi/types';

export const rtkQueryApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getTasks: builder.query<Array<ITask>, string | void>({
      query: (id = '') => `/tasks/${id}`,
    }),

    createTask: builder.mutation<ITask, ITaskCreateOrEdit>({
      query: ({ path = '', userData }) => {
        return {
          url: path,
          method: 'POST',
          body: userData,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),

    updateTask: builder.mutation<void, ITaskCreateOrEdit>({
      query: ({ path = '', userData }) => {
        return {
          url: path,
          method: 'PUT',
          body: userData,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),

    deleteTask: builder.mutation<void, string | number>({
      query: (id = '') => {
        return {
          url: `$tasks/${id}`,
          method: 'Delete',
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = rtkQueryApi;
