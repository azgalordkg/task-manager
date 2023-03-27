import 'react-native-get-random-values';

import moment, { Moment } from 'moment';
import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { TaskSchema } from '@/constants';
import {
  CreateTaskData,
  RecurringTypes,
  TasksList,
  TasksResponseItem,
  UpdateTaskData,
} from '@/types';
import { getDateFromToday } from '@/utils';

const realm = new Realm({
  path: 'realm-files/taskManager',
  schema: [TaskSchema],
  deleteRealmIfMigrationNeeded: true,
});

export const getRecurringTasks = (type: RecurringTypes = 'Daily') => {
  if (realm) {
    return realm.objects('Task').filtered('repeat == $0', type);
  }
  return [];
};

export const getTasks = () => {
  if (realm) {
    const today = getDateFromToday(-1);
    today.setHours(0, 0, 0, 0);
    const end = getDateFromToday(3);

    return realm
      .objects('Task')
      .filtered(
        'startDate >= $0 && startDate <= $1',
        today.getTime(),
        end.getTime(),
      );
  }
  return [];
};

export const createTask = (data: CreateTaskData) => {
  if (realm) {
    realm.write(() => {
      realm.create('Task', {
        ...data,
        _id: uuidv4().slice(0, 8),
        isDone: false,
        startDate: data.startDate.getTime(),
        endDate: data.endDate.getTime(),
      });
    });
  }
};

export const findOne = (_id: string) => {
  if (realm) {
    const tasks = realm.objects('Task').filtered('_id == $0', _id);
    return tasks[0];
  }
};

export const updateTask = ({
  _id,
  name,
  startDate,
  endDate,
  description,
  hasDeadline,
  repeat,
  isDone,
}: UpdateTaskData) => {
  const task = findOne(_id) as unknown as TasksResponseItem;
  if (realm && task) {
    realm.write(() => {
      task.name = name;
      task.description = description;
      if (startDate && endDate) {
        task.startDate = startDate.getTime();
        task.endDate = endDate.getTime();
      }
      task.hasDeadline = hasDeadline;
      task.isDone = isDone;
      task.repeat = repeat;
    });
  }
};

export const prepareUpdateRecurringData = (task: TasksResponseItem) => {
  const start = moment(new Date(Number(task.startDate)));
  const end = moment(new Date(Number(task.endDate)));
  const today = moment();

  const { _id, name, repeat, description, hasDeadline } = task;
  const updateData = {
    _id,
    name,
    repeat,
    description,
    hasDeadline,
    isDone: false,
  } as unknown as UpdateTaskData;

  if (task.startDate && task.endDate) {
    start.set('date', today.date());
    start.set('month', today.month());
    end.set('date', today.date());
    end.set('month', today.month());

    updateData.startDate = start.toDate();
    updateData.endDate = end.toDate();
  }

  return updateData;
};

export const updateRecurringDates = (
  tasks: TasksResponseItem[],
  today: Moment,
  days: string[],
  type: RecurringTypes,
) => {
  for (let i in tasks) {
    const recurringTask = tasks[i];
    const start = moment(new Date(Number(recurringTask.startDate)));
    start.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

    for (let day of days) {
      const isToday = moment(new Date(Number(day))).isSame(today, 'day');

      if (isToday) {
        let isBefore = start.isBefore(today);

        if (type === 'Weekly') {
          isBefore = today.diff(start, 'days') % 7 === 0;
        }

        if (isBefore) {
          const updateData = prepareUpdateRecurringData(recurringTask);
          updateTask(updateData);
        }
      }
    }
  }
};

export const updateRecurringTasks = (tasksByDays: TasksList) => {
  const dailyTasks = getRecurringTasks(
    'Daily',
  ) as unknown as TasksResponseItem[];
  const weeklyTasks = getRecurringTasks(
    'Weekly',
  ) as unknown as TasksResponseItem[];

  const days = Object.keys(tasksByDays);
  const today = moment();
  today.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

  updateRecurringDates(dailyTasks, today, days, 'Daily');
  updateRecurringDates(weeklyTasks, today, days, 'Weekly');
};

export const markTaskAsDone = (_id: string, isDone: boolean) => {
  const task = findOne(_id);
  if (realm && task) {
    realm.write(() => {
      (findOne(_id) as unknown as TasksResponseItem).isDone = isDone;
    });
  }
};

export const deleteOne = (_id: string) => {
  const task = findOne(_id);
  if (realm && task) {
    realm.write(() => {
      realm.delete(task);
    });
  }
};
