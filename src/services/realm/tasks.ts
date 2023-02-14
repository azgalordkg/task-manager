import 'react-native-get-random-values';

import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { CreateTaskData, TasksResponseItem, UpdateTaskData } from '@/types';

import { getDateFromToday } from '../date';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    name: 'string',
    isDone: 'int?',
    description: 'string?',
    startDate: 'int?',
    endDate: 'int?',
  },
  primaryKey: '_id',
};

const realm = new Realm({
  path: 'realm-files/taskManager',
  schema: [TaskSchema],
  deleteRealmIfMigrationNeeded: true,
});

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
        _id: uuidv4().slice(0, 8),
        isDone: 0,
        ...data,
        startDate: data.startDate.getTime(),
        endDate: data.endDate.getTime(),
      });
    });
  }
};

export const findOne = (_id: string) => {
  if (realm) {
    const tasks = realm.objects('Task').filtered('_id == $0', _id);
    console.log(tasks, 'tasks');
    return tasks[0];
  }
};

export const updateTask = (data: UpdateTaskData) => {
  const { _id, name, startDate, endDate, description } = data;
  const task = findOne(_id);
  if (realm && task) {
    realm.write(() => {
      (findOne(_id) as unknown as TasksResponseItem).name = name;
      if (description) {
        (findOne(_id) as unknown as TasksResponseItem).description =
          description;
      }
      if (startDate && endDate) {
        (findOne(_id) as unknown as TasksResponseItem).startDate =
          startDate.getTime();
        (findOne(_id) as unknown as TasksResponseItem).endDate =
          endDate.getTime();
      }
    });
  }
};

export const markTaskAsDone = (_id: string, isDone: number) => {
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
