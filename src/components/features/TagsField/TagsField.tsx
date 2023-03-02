import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { DashedButton } from '@/components/ui';
import { Tag } from '@/components/ui/Tag';
import { useTagManageContext } from '@/context/hooks';
import { TagsResponseItem } from '@/types';

import styles from './TagsField.styles';
import { Props } from './TagsField.types';

export const TagsField: FC<Props> = ({ onAddPress }) => {
  const [tags, setTags] = useState<TagsResponseItem[]>([]);
  const {
    selectedTags,
    removeTag,
    defaultTags,
    customTags,
    fetchCustomTags,
    fetchDefaultTags,
  } = useTagManageContext();

  useEffect(() => {
    if (selectedTags) {
      fetchDefaultTags();
      fetchCustomTags();
      const filteredDefault = defaultTags.filter(tag =>
        selectedTags.includes(tag._id),
      );
      const filteredCustom = customTags.filter(tag =>
        selectedTags.includes(tag._id),
      );
      setTags([...filteredDefault, ...filteredCustom]);
    }
  }, [selectedTags]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags: </Text>
      <View style={styles.tagsWrapper}>
        {tags?.map(({ name, color, _id }) => (
          <Tag
            onPress={() => {
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
