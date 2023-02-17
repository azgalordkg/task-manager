import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import Realm from 'realm';

import { getTasks } from '@/services/realm';
import { TasksList } from '@/types';
import { sortTasksByDate } from '@/utils';

import { TaskListContextType } from './TaskModalProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksList>({});
  const [visible, setVisible] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string | undefined>();

  const fetchList = () => {
    const tasks: Realm.Results<Realm.Object> | any[] = getTasks();
    const tasksByDays = sortTasksByDate(tasks);

    if (tasks) {
      setTaskList(tasksByDays);
    }
  };

  const modalVisibleHandler = (value: boolean) => {
    setVisible(value);
  };

  const onSetTaskIdHandler = (id?: string) => {
    setTaskId(id);
  };

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        visible,
        taskId,
        fetchList,
        modalVisibleHandler,
        onSetTaskIdHandler,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};
