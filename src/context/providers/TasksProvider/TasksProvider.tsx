import moment from 'moment';
import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { getOverdueTasks, getTasks, getUnscheduledTasks } from '@/services';
import { RealmTaskType, TasksResponseItem } from '@/types';

import { TaskListContextType } from './TasksProvider.types';

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [taskList, setTaskList] = useState<TasksResponseItem[]>([]);
  const [targetDate, setTargetDate] = useState(moment().valueOf());
  const [unscheduledTaskList, setUnscheduledTaskList] = useState<
    TasksResponseItem[]
  >([]);
  const [overdueTaskList, setOverdueTaskList] = useState<TasksResponseItem[]>(
    [],
  );
  const [inputVisible, setInputVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const fetchList = () => {
    const tasks: RealmTaskType = getTasks(targetDate);
    const unscheduledTasks: RealmTaskType = getUnscheduledTasks();
    const overdueTasks: RealmTaskType = getOverdueTasks();

    if (tasks) {
      setTaskList(tasks as TasksResponseItem[]);
    }
    if (unscheduledTasks) {
      setUnscheduledTaskList(unscheduledTasks as TasksResponseItem[]);
    }
    if (overdueTasks) {
      setOverdueTaskList(overdueTasks as TasksResponseItem[]);
    }
  };

  const toggleSearchInput = () => {
    setInputVisible(!inputVisible);
  };

  const handleTaskDateChange = (date: number) => {
    setTargetDate(date);
  };

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <TaskListContext.Provider
      value={{
        inputVisible,
        toggleSearchInput,
        unscheduledTaskList,
        overdueTaskList,
        taskList,
        fetchList,
        targetDate,
        handleTaskDateChange,
        searchValue,
        handleSearchValueChange,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};
