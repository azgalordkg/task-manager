import 'react-native-get-random-values';

import moment from 'moment';
import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { TaskSchema } from '@/constants';
import {
  CreateTaskData,
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

export const getTasksDueToday = () => {
  if (realm) {
    return realm.objects('Task').filtered('repeat == $0', 'Daily');
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

export const updateTask = (data: UpdateTaskData) => {
  const {
    _id,
    name,
    startDate,
    endDate,
    description,
    hasDeadline,
    repeat,
    isDone,
  } = data;
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

export const prepareUpdateDailyData = (dailyTask: TasksResponseItem) => {
  const start = moment(new Date(Number(dailyTask.startDate)));
  const end = moment(new Date(Number(dailyTask.endDate)));
  const today = moment();

  const { _id, name, repeat, description, hasDeadline } = dailyTask;
  const updateData = {
    _id,
    name,
    repeat,
    description,
    hasDeadline,
    isDone: false,
  } as unknown as UpdateTaskData;

  if (dailyTask.startDate && dailyTask.endDate) {
    start.set('date', today.date());
    start.set('month', today.month());
    end.set('date', today.date());
    end.set('month', today.month());

    updateData.startDate = start.toDate();
    updateData.endDate = end.toDate();
  }

  return updateData;
};

export const updateDailyTasks = (tasksByDays: TasksList) => {
  const dailyTasks = getTasksDueToday() as unknown as TasksResponseItem[];
  const days = Object.keys(tasksByDays);

  for (let i in dailyTasks) {
    const dailyTask = dailyTasks[i];

    for (let day of days) {
      const today = moment();
      today.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

      const isToday = moment(new Date(Number(day))).isSame(today, 'day');
      const start = moment(new Date(Number(dailyTask.startDate)));
      start.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

      if (isToday) {
        const isBefore = start.isBefore(today);

        if (isBefore) {
          const updateData = prepareUpdateDailyData(dailyTask);

          updateTask(updateData);
        }
      }
    }
  }
};

export const markTaskAsDone = (_id: string, isDone: boolean) => {
  const task = findOne(_id);
  if (realm && task) {
    console.log(123);
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
