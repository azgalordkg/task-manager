import React, { createContext, useState } from 'react';
import Realm from 'realm';

import {
  IModalProviderProps,
  TaskListContextType,
} from '@/contexts/taskList/taskList.types';
import { sortTasksByDate } from '@/services';
import { getTasks } from '@/services/realm';
import { TasksList } from '@/types';

export const TaskListContext = createContext<TaskListContextType | {}>({});

export const TaskListContextProvider = ({ children }: IModalProviderProps) => {
  const [taskList, setTaskList] = useState<TasksList>();

  const fetchList = () => {
    const tasks: Realm.Results<Realm.Object> | any[] = getTasks();
    const tasksByDays = sortTasksByDate(tasks);

    if (tasks) {
      setTaskList(tasksByDays);
    }
  };

  return (
    <TaskListContext.Provider value={{ taskList, fetchList }}>
      {children}
    </TaskListContext.Provider>
  );
};
