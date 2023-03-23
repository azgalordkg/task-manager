import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { DashedButton } from '@/components/ui';
import { Tag } from '@/components/ui/Tag';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { TagsResponseItem } from '@/types';
import { vibrate } from '@/utils';

import styles from './TagsField.styles';
import { Props } from './TagsField.types';

export const TagsField: FC<Props> = ({ onAddPress }) => {
  const { theme } = useThemeContext();

  const style = styles(theme);
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

      const filtered = allTags.filter(({ _id }) => selectedTags.includes(_id));
      setTags(filtered);
    }
  }, [selectedTags]);

  return (
    <View style={style.container}>
      <Text style={style.label}>Tags: </Text>
      <View style={style.tagsWrapper}>
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
        {tags?.length < 3 && (
          <DashedButton onPress={onAddPress}>Add</DashedButton>
        )}
      </View>
    </View>
  );
};
