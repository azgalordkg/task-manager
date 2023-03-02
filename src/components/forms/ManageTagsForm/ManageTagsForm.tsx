import React, { FC, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { Plus } from '@/components/icons';
import {
  DashedButton,
  FormContentWrapper,
  SelectTagItem,
} from '@/components/ui';
import { useTagManageContext } from '@/context/hooks';

import styles from './ManageTagsForm.styles';
import { Props } from './ManageTagsForm.types';

export const ManageTagsForm: FC<Props> = ({ onClose, onCreateTagPress }) => {
  const {
    currentSelectedTags,
    selectTagHandler,
    acceptSelectedTags,
    tags,
    fetchTags,
  } = useTagManageContext();

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <FormContentWrapper
      submitTitle="Done"
      title="Manage Tags"
      onSubmitPress={() => {
        acceptSelectedTags();
        onClose();
      }}>
      <View>
        <DashedButton icon={Plus} variant="large" onPress={onCreateTagPress}>
          Create a tag
        </DashedButton>
        <ScrollView style={styles.itemsWrapper}>
          {tags.map(({ _id, name, color }) => {
            return (
              <SelectTagItem
                key={_id}
                checked={currentSelectedTags.includes(_id)}
                onPress={() => selectTagHandler(_id)}
                title={name}
                color={color}
              />
            );
          })}
        </ScrollView>
      </View>
    </FormContentWrapper>
  );
};
