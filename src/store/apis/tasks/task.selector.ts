import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';
import { AllTasksResponse } from '@/store/apis/tasks/tasks.types';

export const selectTasks = createSelector(
  (state: RootState) => state.tasksApi.queries['getTasks()'],
  apiResult => apiResult?.data,
);

export const selectAllTasks = createSelector(
  // TODO найти способ достать данные из стора без аргумента undefined
  (state: RootState) => state.tasksApi?.queries['getAllTasks(undefined)'],
  apiResult => apiResult?.data as AllTasksResponse | undefined,
);

export const selectTargetDate = (state: RootState) =>
  state.taskSlice.selectedDate;
