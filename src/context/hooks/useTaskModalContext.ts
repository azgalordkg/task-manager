import { useContext } from 'react';

import { TaskListContext } from '../providers';

export const useTaskModalContext = () => {
  const { taskList, fetchList } = useContext(TaskListContext);

  return {
    taskList,
    fetchList,
  };
};
