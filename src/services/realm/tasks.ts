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
        createdAt: data.startDate.getTime(),
      });
    });
  }
};

export const findOneTask = (_id: string): TasksResponseItem | undefined => {
  if (realm) {
    const tasks = realm
      .objects('Task')
      .filtered('_id == $0', _id) as unknown as TasksResponseItem[];
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
  tags,
  isDone,
}: UpdateTaskData) => {
  const task = findOneTask(_id) as unknown as TasksResponseItem;
  if (realm && task) {
    realm.write(() => {
      task.name = name;
      task.description = description;
      if (startDate && endDate) {
        task.startDate = startDate.getTime();
        task.endDate = endDate.getTime();
      }
      task.hasDeadline = hasDeadline;
      task.isDone = Boolean(isDone);
      task.repeat = repeat;
      task.tags = tags;
    });
  }
};

export const prepareUpdateRecurringData = (task: TasksResponseItem) => {
  const start = moment(new Date(Number(task.startDate)));
  const end = moment(new Date(Number(task.endDate)));
  const today = moment();

  const { _id, name, repeat, description, hasDeadline, tags } = task;
  const updateData = {
    _id,
    name,
    tags,
    repeat,
    description,
    hasDeadline,
    isDone: false,
  } as unknown as UpdateTaskData;

  if (task.startDate && task.endDate) {
    start.set('year', today.year());
    start.set('month', today.month());
    start.set('date', today.date());
    end.set('year', today.year());
    end.set('month', today.month());
    end.set('date', today.date());

    updateData.startDate = start.toDate();
    updateData.endDate = end.toDate();
  }

  return updateData;
};

const checkMonthlyTaskUpdate = (
  today: moment.Moment,
  start: moment.Moment,
  createdAt: number,
) => {
  const monthDifference = today.diff(start, 'months');

  if (monthDifference > 0) {
    const startDate = start.toDate().getDate();
    const todayDate = today.toDate().getDate();

    const createdAtDate = moment(new Date(Number(createdAt)));
    const isEndOfMonth = moment(createdAtDate)
      .endOf('month')
      .isSame(createdAtDate, 'day');

    const endOfMonth = moment().endOf('month');
    const isTodayEnd = today.isSame(endOfMonth, 'day');

    if (isEndOfMonth) {
      return isTodayEnd;
    } else if (startDate === todayDate) {
      return true;
    }
  }

  return false;
};

const checkYearlyTaskUpdate = (today: moment.Moment, start: moment.Moment) => {
  const yearDifference = today.diff(start, 'years');

  if (yearDifference > 0) {
    const isEndOfLeapFebruary =
      start.toDate().getMonth() === 1 && start.toDate().getDate() >= 28;
    const isTodayLastOfFebruary =
      today.toDate().getMonth() === 1 && today.toDate().getDate() >= 28;

    if (isEndOfLeapFebruary && isTodayLastOfFebruary) {
      return true;
    }
  }
  return false;
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
        let isBefore = false;

        if (type === 'Daily') {
          isBefore = start.isBefore(today);
        }
        if (type === 'Weekly') {
          isBefore = today.diff(start, 'days') % 7 === 0;
        }
        if (type === 'Monthly') {
          isBefore = checkMonthlyTaskUpdate(
            today,
            start,
            recurringTask.createdAt,
          );
        }
        if (type === 'Yearly') {
          isBefore = checkYearlyTaskUpdate(today, start);
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
  const monthlyTasks = getRecurringTasks(
    'Monthly',
  ) as unknown as TasksResponseItem[];
  const yearlyTasks = getRecurringTasks(
    'Yearly',
  ) as unknown as TasksResponseItem[];

  const days = Object.keys(tasksByDays);
  const today = moment();
  today.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

  updateRecurringDates(dailyTasks, today, days, 'Daily');
  updateRecurringDates(weeklyTasks, today, days, 'Weekly');
  updateRecurringDates(monthlyTasks, today, days, 'Monthly');
  updateRecurringDates(yearlyTasks, today, days, 'Yearly');
};

export const markTaskAsDone = (_id: string, isDone: boolean) => {
  const task = findOneTask(_id);
  if (realm && task) {
    realm.write(() => {
      (findOneTask(_id) as unknown as TasksResponseItem).isDone = isDone;
    });
  }
};

export const deleteOneTask = (_id: string) => {
  const task = findOneTask(_id);
  if (realm && task) {
    realm.write(() => {
      realm.delete(task);
    });
  }
};
