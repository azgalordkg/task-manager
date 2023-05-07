import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

export const selectedTasks = createSelector(
  (state: RootState) => state.tasks.queries['getTasks()'],
  apiResult => apiResult?.data,
);
