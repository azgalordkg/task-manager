import moment from 'moment';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { useDayChangeListener } from '@/hooks';
import {
  getOverdueTasks,
  getTasks,
  getUnscheduledTasks,
  updateRecurringTasks,
} from '@/services';
import { RealmTaskType, TasksResponseItem } from '@/types';
import { getUserTimeFormat } from '@/utils';

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
  const [timeFormat, setTimeFormat] = useState('LT');

  const fetchList = (date?: number) => {
    const tasks: RealmTaskType = getTasks(date || targetDate);
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

  useDayChangeListener(() => {
    updateRecurringTasks();
    fetchList(moment().valueOf());
  });

  useEffect(() => {
    getUserTimeFormat().then(({ format }) => {
      setTimeFormat(format);
    });
  }, []);

  return (
    <TaskListContext.Provider
      value={{
        timeFormat,
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
