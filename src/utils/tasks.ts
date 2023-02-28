import moment from 'moment';
import Realm from 'realm';

import { TasksList } from '@/types';

// TODO replace any
export const sortTasksByDate = (tasks: Realm.Results<Realm.Object> | any[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = +moment(today.getTime()).add(1, 'day');

  const tasksByDays: TasksList = {
    [today.getTime()]: [],
    [tomorrow]: [],
  };

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

export const sortTasksForRender = (tasks?: TasksList) => {
  if (!tasks) {
    return [];
  }
  return Object.keys(tasks).sort(
    (a, b) => new Date(Number(a)).getTime() - new Date(Number(b)).getTime(),
  );
};
