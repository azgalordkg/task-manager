import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

export const selectTasks = createSelector(
  (state: RootState) => state.tasks.queries['getTasks()'],
  apiResult => apiResult?.data,
);
