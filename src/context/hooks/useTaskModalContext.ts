import { useContext } from 'react';

import { TaskListContext } from '../providers';

export const useTaskModalContext = () => {
  const { taskList, fetchList, unscheduledTaskList } =
    useContext(TaskListContext);

  return {
    taskList,
    unscheduledTaskList,
    fetchList,
  };
};
