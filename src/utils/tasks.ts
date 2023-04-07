import moment from 'moment';

import { TasksResponseItem } from '@/types';

export const getTodayTask = (
  realmTasks: TasksResponseItem[] | Realm.Results<Realm.Object<unknown, never>>,
) => {
  const tasks = realmTasks as TasksResponseItem[];
  const today = moment().startOf('day');
  return tasks?.filter(task => moment(task.createdAt).isSame(today, 'd'));
};

export const filterTasks = (
  tasks: TasksResponseItem[],
  filterType: 'incomplete' | 'complete',
) => {
  if (filterType === 'incomplete') {
    return tasks.filter(task => !task.isDone);
  }
  if (filterType === 'complete') {
    return tasks.filter(task => task.isDone);
  }
};
