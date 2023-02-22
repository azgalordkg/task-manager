import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import Realm from 'realm';

import { getTasks, updateDailyTasks } from '@/services/realm';
import { TasksList } from '@/types';
import { sortTasksByDate } from '@/utils';

import { TaskListContextType } from './TaskModalProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksList>({});

  const fetchList = () => {
    const tasks: Realm.Results<Realm.Object> | any[] = getTasks();
    const tasksByDays = sortTasksByDate(tasks);
    updateDailyTasks(tasksByDays);

    if (tasks) {
      setTaskList(tasksByDays);
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
