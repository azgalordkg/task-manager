import 'react-native-get-random-values';

import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { TagSchema } from '@/constants';
import { CreateTagData } from '@/types';

const realm = new Realm({
  path: 'realm-files/taskManager',
  schema: [TagSchema],
  deleteRealmIfMigrationNeeded: true,
});

export const getTags = () => {
  return realm.objects('Tag');
};

export const createTag = (data: CreateTagData) => {
  if (realm) {
    realm.write(() => {
      realm.create('Task', {
        ...data,
        _id: uuidv4().slice(0, 8),
      });
    });
  }
};
