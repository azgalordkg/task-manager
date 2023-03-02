import 'react-native-get-random-values';

import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { COLORS, TagSchema } from '@/constants';
import { CreateTagData, TagsResponseItem, UpdateTagData } from '@/types';

const realm = new Realm({
  path: 'realm-files/tagManager',
  schema: [TagSchema],
  deleteRealmIfMigrationNeeded: true,
});

export const getTags = () => {
  if (realm) {
    return realm.objects('Tag');
  }
  return [];
};

export const createTag = (data: CreateTagData) => {
  if (realm) {
    realm.write(() => {
      realm.create('Tag', {
        ...data,
        _id: uuidv4().slice(0, 8),
      });
    });
  }
};

export const getDefaultTags = (): TagsResponseItem[] => {
  if (realm) {
    const defaultTags = realm.objects('Tag').filtered('isDefault == $0', true);

    if (defaultTags.length) {
      return defaultTags as unknown as TagsResponseItem[];
    } else {
      createTag({ isDefault: true, color: COLORS.WHITE_RED, name: 'Work' });
      createTag({ isDefault: true, color: COLORS.WHITE_GREEN, name: 'Home' });

      return getDefaultTags();
    }
  }
  return [];
};

export const findOneTag = (_id: string) => {
  if (realm) {
    const tasks = realm.objects('Tag').filtered('_id == $0', _id);
    return tasks[0];
  }
};

export const updateTag = ({ name, color, _id }: UpdateTagData) => {
  if (realm) {
    const tag = findOneTag(_id) as unknown as TagsResponseItem;
    if (tag && !tag.isDefault) {
      realm.write(() => {
        tag.name = name || tag.name;
        tag.color = color || tag.color;
      });
    }
  }
};

export const deleteOneTag = (_id: string) => {
  const tag = findOneTag(_id) as unknown as TagsResponseItem;
  if (realm && tag && !tag.isDefault) {
    realm.write(() => {
      realm.delete(tag);
    });
  }
};
