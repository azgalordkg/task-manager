import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import moment from 'moment/moment';

import { BASE_URL, URL_ROUTES } from '@/constants';
import { prepareHeaders } from '@/utils';

import { AllTasksResponse, Task, TaskCreateOrEdit } from './tasks.types';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ['getAllTasks'],
  endpoints: builder => ({
    getAllTasks: builder.query<AllTasksResponse, void>({
      providesTags: ['getAllTasks'],
      query: () => `${URL_ROUTES.TASKS}`,
      transformResponse: (response: Task[]) => {
        const currentDate = moment();

        return {
          taskList: response,
          unscheduledTaskList: response.filter(task => !task.startDate),
          overdueTaskList: response.filter(
            task => !task.isDone && moment(task.startDate) < currentDate,
          ),
        };
      },
    }),

    getTasks: builder.query<Task, number | string | void>({
      query: (id = '') => `/tasks/${id}`,
    }),

    createTask: builder.mutation<Task, TaskCreateOrEdit>({
      query: ({ path = '', userData }) => {
        return {
          url: path,
          method: 'POST',
          body: userData,
        };
      },
    }),

    updateTask: builder.mutation<void, TaskCreateOrEdit>({
      query: ({ path = '', userData }) => {
        return {
          url: path,
          method: 'PUT',
          body: userData,
        };
      },
    }),

    deleteTask: builder.mutation<void, string | number>({
      query: (id = '') => {
        return {
          url: `$tasks/${id}`,
          method: 'Delete',
        };
      },
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
