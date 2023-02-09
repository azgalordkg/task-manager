import Realm from 'realm';

import { TasksList } from '@/types';

export const sortTasksByDate = (tasks: Realm.Results<Realm.Object> | any[]) => {
  const tasksByDays: TasksList = {};

  tasks.forEach(task => {
    const date = new Date(task.startDate);
    date.setHours(0, 0, 0, 0);
    const day = date.getTime();

    if (tasksByDays[day]) {
      tasksByDays[day].push(task);
    } else {
      tasksByDays[day] = [task];
    }
  });

  return tasksByDays;
};
