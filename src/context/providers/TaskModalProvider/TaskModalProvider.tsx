import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { getTasks, getUnscheduledTasks } from '@/services';
import { RealmTaskType, TasksResponseItem } from '@/types';

import { TaskListContextType } from './TaskModalProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksResponseItem[]>([]);
  const [unscheduledTaskList, setUnscheduledTaskList] = useState<
    TasksResponseItem[]
  >([]);

  const fetchList = (targetDate?: number) => {
    let tasks: RealmTaskType = getTasks(targetDate || new Date().getTime());
    let unscheduledTasks: RealmTaskType = getUnscheduledTasks();

    if (tasks) {
      setTaskList(tasks as TasksResponseItem[]);
    }
    if (unscheduledTasks) {
      setUnscheduledTaskList(unscheduledTasks as TasksResponseItem[]);
    }
  };

  return (
    <TaskListContext.Provider
      value={{
        unscheduledTaskList,
        taskList,
        fetchList,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};
