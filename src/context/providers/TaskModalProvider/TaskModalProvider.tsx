import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { getTasks } from '@/services';
import { RealmTaskType, TasksResponseItem } from '@/types';

import { TaskListContextType } from './TaskModalProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksResponseItem[]>([]);

  const fetchList = (targetDate?: number) => {
    const tasks: RealmTaskType = getTasks(targetDate || new Date().getTime());

    if (tasks) {
      setTaskList(tasks as TasksResponseItem[]);
    }
  };

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        fetchList,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};
