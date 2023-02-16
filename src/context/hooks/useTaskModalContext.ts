import { useContext } from 'react';

import { TaskListContext } from '../providers';

export const useTaskModalContext = () => {
  const {
    taskId,
    visible,
    modalVisibleHandler,
    onSetTaskIdHandler,
    taskList,
    fetchList,
  } = useContext(TaskListContext);

  return {
    taskId,
    visible,
    modalVisibleHandler,
    onSetTaskIdHandler,
    taskList,
    fetchList,
  };
};
