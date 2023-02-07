import Realm from 'realm';
import {useEffect, useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {CreateTaskData, TasksResponseItem} from '../types';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    name: 'string',
    isDone: 'int?',
    description: 'string?',
  },
  primaryKey: '_id',
};

export const useRealm = () => {
  const [realm, setRealm] = useState<undefined | Realm>();

  const openRealm = async () => {
    const result = await Realm.open({
      path: 'realm-files/taskManager',
      schema: [TaskSchema],
      deleteRealmIfMigrationNeeded: true,
    });
    setRealm(result);
  };

  const createTask = (data: CreateTaskData) => {
    if (realm) {
      realm.write(() => {
        realm.create('Task', {
          _id: uuidv4().slice(0, 8),
          isDone: 0,
          ...data,
        });
      });
    }
  };

  const getTasks = () => {
    if (realm) {
      return realm.objects('Task');
    }
    return [];
  };

  const checkTaskHandler = (_id: string, isDone: number) => {
    if (realm) {
      const tasks = realm.objects('Task').filtered('_id == $0', _id);
      const task = tasks[0];
      realm.write(() => {
        (task as unknown as TasksResponseItem).isDone = isDone;
      });
    }
  };

  useEffect(() => {
    void openRealm();
  }, []);

  return {
    realm,
    createTask,
    getTasks,
    checkTaskHandler,
  };
};
