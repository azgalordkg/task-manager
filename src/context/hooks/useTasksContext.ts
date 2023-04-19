import { useContext } from 'react';

import { TaskListContext } from '../providers';

export const useTasksContext = () => {
  const {
    taskList,
    fetchList,
    unscheduledTaskList,
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
    fetchList,
    targetDate,
    handleTaskDateChange,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  };
};
