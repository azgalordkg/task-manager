import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { getTasks } from '@/services';
import { RealmTaskType, TasksResponseItem } from '@/types';
import { getTodayTask } from '@/utils';

import { TaskListContextType } from './TaskModalProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksResponseItem[]>([]);

  const fetchList = () => {
    const tasks: RealmTaskType = getTasks();
    const todayTasks: RealmTaskType = getTodayTask(tasks);

    if (tasks) {
      setTaskList(todayTasks);
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
