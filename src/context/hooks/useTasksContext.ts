import { useContext } from 'react';

import { TaskListContext } from '../providers';

export const useTasksContext = () => {
  const {
    taskList,
    fetchList,
    unscheduledTaskList,
    overdueTaskList,
    targetDate,
    handleTaskDateChange,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  } = useContext(TaskListContext);

  return {
    taskList,
    unscheduledTaskList,
    overdueTaskList,
    fetchList,
    targetDate,
    handleTaskDateChange,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  };
};
