import moment from 'moment';
import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { getTasks, getUnscheduledTasks } from '@/services';
import { RealmTaskType, TasksResponseItem } from '@/types';

import { TaskListContextType } from './TaskModalProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksResponseItem[]>([]);
  const [targetDate, setTargetDate] = useState(moment().valueOf());
  const [unscheduledTaskList, setUnscheduledTaskList] = useState<
    TasksResponseItem[]
  >([]);

  const fetchList = () => {
    let tasks: RealmTaskType = getTasks(targetDate);
    let unscheduledTasks: RealmTaskType = getUnscheduledTasks();

    if (tasks) {
      setTaskList(tasks as TasksResponseItem[]);
    }
    if (unscheduledTasks) {
      setUnscheduledTaskList(unscheduledTasks as TasksResponseItem[]);
    }
  };

  const handleTaskDateChange = (date: number) => {
    setTargetDate(date);
  };

  return (
    <TaskListContext.Provider
      value={{
        unscheduledTaskList,
        taskList,
        fetchList,
        targetDate,
        handleTaskDateChange,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};
