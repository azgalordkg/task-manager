import 'react-native-get-random-values';

import Realm from 'realm';
import { v4 as uuidv4 } from 'uuid';

import { RED_COLORS, TagSchema, YELLOW_COLORS } from '@/constants';
import { CreateTagData, TagsResponseItem, UpdateTagData } from '@/types';
import { Storage } from '@/utils';

const realm = new Realm({
  path: 'realm-files/tagManager',
  schema: [TagSchema],
  deleteRealmIfMigrationNeeded: true,
});

export const getAllTags = () => {
  if (realm) {
    const tags = realm.objects('Tag');
    return tags as unknown as TagsResponseItem[];
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

export const createDefaultTags = async () => {
  if (realm) {
    const isDefaultCreated = await Storage.getData('defaultTags');

    if (!isDefaultCreated) {
      createTag({ isDefault: true, color: RED_COLORS.THIRD, name: 'Home' });
      createTag({ isDefault: true, color: YELLOW_COLORS.THIRD, name: 'Work' });
      await Storage.storeData('defaultTags', 'true');
    }
  }
};

export const findOneTag = (_id: string): TagsResponseItem | undefined => {
  if (realm) {
    const tasks = realm
      .objects('Tag')
      .filtered('_id == $0', _id) as unknown as TagsResponseItem[];
    return tasks[0];
  }
};

export const updateTag = ({ name, color, _id }: UpdateTagData) => {
  if (realm) {
    const tag = findOneTag(_id) as unknown as TagsResponseItem;
    if (tag) {
      realm.write(() => {
        tag.name = name || tag.name;
        tag.color = color || tag.color;
      });
    }
  }
};

export const deleteOneTag = (_id: string) => {
  const tag = findOneTag(_id) as unknown as TagsResponseItem;
  if (realm && tag) {
    realm.write(() => {
      realm.delete(tag);
    });
  }
};
