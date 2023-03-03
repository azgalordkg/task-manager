import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { DashedButton } from '@/components/ui';
import { Tag } from '@/components/ui/Tag';
import { useTagManageContext } from '@/context/hooks';
import { TagsResponseItem } from '@/types';
import { vibrate } from '@/utils';

import styles from './TagsField.styles';
import { Props } from './TagsField.types';

export const TagsField: FC<Props> = ({ onAddPress }) => {
  const [tags, setTags] = useState<TagsResponseItem[]>([]);
  const {
    selectedTags,
    removeTag,
    tags: allTags,
    fetchTags,
  } = useTagManageContext();

  useEffect(() => {
    if (selectedTags) {
      fetchTags();

      const filtered = allTags.filter(tag => selectedTags.includes(tag._id));
      setTags(filtered);
    }
  }, [selectedTags]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags: </Text>
      <View style={styles.tagsWrapper}>
        {tags?.map(({ name, color, _id }) => (
          <Tag
            onPress={() => {
              vibrate('selection');
              removeTag(_id);
            }}
            key={name}
            name={name}
            bgColor={color}
          />
        ))}
        <DashedButton onPress={onAddPress}>Add</DashedButton>
      </View>
    </View>
  );
};
