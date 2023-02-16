import { useContext } from 'react';

import { TaskListContextType } from '@/contexts/taskList';
import { TaskListContext } from '@/contexts/taskList/taskList.context';

export const useTaskList = () => {
  const { taskList, fetchList } = useContext(
    TaskListContext,
  ) as TaskListContextType;

  return {
    taskList,
    fetchList,
  };
};
