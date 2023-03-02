import React, { FC, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { Plus } from '@/components/icons';
import {
  DashedButton,
  FormContentWrapper,
  SelectTagItem,
} from '@/components/ui';
import { getDefaultTags } from '@/services/realm/tags';
import { TagsResponseItem } from '@/types';

import styles from './ManageTagsForm.styles';
import { Props } from './ManageTagsForm.types';

export const ManageTagsForm: FC<Props> = () => {
  const [defaultTags, setDefaultTags] = useState<TagsResponseItem[]>([]);

  useEffect(() => {
    const tags = getDefaultTags();
    setDefaultTags(tags);
  }, []);

  return (
    <FormContentWrapper
      submitTitle="Accept"
      title="Manage Tags"
      onSubmitPress={() => {}}>
      <View>
        <DashedButton icon={Plus} variant="large" onPress={() => {}}>
          Create a tag
        </DashedButton>
        <ScrollView style={styles.itemsWrapper}>
          {defaultTags.map(({ _id, name, color }) => (
            <SelectTagItem
              key={_id}
              checked
              onPress={() => {}}
              title={name}
              color={color}
            />
          ))}
        </ScrollView>
      </View>
    </FormContentWrapper>
  );
};
