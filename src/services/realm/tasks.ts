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
    const end = getDateFromToday(4);

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
        repeatId: data.repeatId || uuidv4().slice(0, 8),
        isDone: false,
        startDate: data.startDate.getTime(),
        endDate: data.endDate.getTime(),
      });
    });
  }
};

const prepareRepeatData = (dailyTask: TasksResponseItem, day: string) => {
  const { name, description, repeatId, hasDeadline, isHidden } = dailyTask;
  const createTaskData = {
    name,
    description,
    repeat: 'Never',
    repeatId,
    hasDeadline,
    isHidden,
  } as CreateTaskData;

  if (dailyTask.startDate && dailyTask.endDate) {
    const startDate = moment(new Date(dailyTask.startDate));
    const endDate = moment(new Date(dailyTask.endDate));
    const secondDate = moment(new Date(Number(day)));
    const diff = startDate.diff(secondDate, 'days') + 1;

    createTaskData.startDate = startDate.add(diff, 'days').toDate();
    createTaskData.endDate = endDate.add(diff, 'days').toDate();
  }

  return createTaskData;
};

export const updateDailyTasks = (tasksByDays: TasksList) => {
  const dailyTasks = getTasksDueToday() as unknown as TasksResponseItem[];
  const days = Object.keys(tasksByDays);

  for (let i in dailyTasks) {
    const dailyTask = dailyTasks[i];
    for (let day of days) {
      const isTaskExists = tasksByDays[day].some(({ repeatId }) => {
        return repeatId === dailyTask.repeatId;
      });

      if (!isTaskExists) {
        const createTaskData = prepareRepeatData(dailyTask, day);
        createTask(createTaskData);
      }
    }
  }
};

export const findOne = (_id: string) => {
  if (realm) {
    const tasks = realm.objects('Task').filtered('_id == $0', _id);
    return tasks[0];
  }
};

export const updateTask = (data: UpdateTaskData) => {
  const { _id, name, startDate, endDate, description, hasDeadline, repeat } =
    data;
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
      task.repeat = repeat;
    });
  }
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
