import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

// тут мы получаем данные из запроса getTasks(), и в нем же есть и данные и статус запроса

export const selectTasks = createSelector(
  (state: RootState) => state.tasks.queries['getTasks()'],
  apiResult => apiResult?.data,
);
