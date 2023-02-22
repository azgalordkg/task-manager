import 'react-native-get-random-values';

import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { CreateTaskData, TasksResponseItem, UpdateTaskData } from '@/types';
import { getDateFromToday } from '@/utils';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    name: 'string',
    isDone: 'bool',
    description: 'string?',
    startDate: 'int?',
    endDate: 'int?',
    hasDeadline: 'bool?',
    repeat: 'string?',
    isHidden: 'bool?',
    repeatId: 'string?',
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
        ...data,
        _id: uuidv4().slice(0, 8),
        // repeatId: uuidv4().slice(0, 8),
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
