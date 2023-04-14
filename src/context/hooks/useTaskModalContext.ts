import { useContext } from 'react';

import { TaskListContext } from '../providers';

export const useTaskModalContext = () => {
  const {
    taskList,
    fetchList,
    unscheduledTaskList,
    targetDate,
    handleTaskDateChange,
  } = useContext(TaskListContext);

  return {
    taskList,
    unscheduledTaskList,
    fetchList,
    targetDate,
    handleTaskDateChange,
  };
};
