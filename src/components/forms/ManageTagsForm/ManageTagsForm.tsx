import React, { FC, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Plus } from '@/components/icons';
import {
  DashedButton,
  FormContentWrapper,
  SelectTagItem,
} from '@/components/ui';
import { COLORS } from '@/constants';
import { useTagManageContext } from '@/context/hooks';
import { vibrate } from '@/utils';

import styles from './ManageTagsForm.styles';
import { Props } from './ManageTagsForm.types';

export const ManageTagsForm: FC<Props> = ({
  onClose,
  onCreateTagPress,
  onEditTagPress,
  isSettings,
}) => {
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
      title={isSettings ? '' : 'Manage Tags'}
      onSubmitPress={() => {
        if (isSettings) {
          acceptSelectedTags();
        }
        onClose();
      }}>
      <View style={styles.container}>
        <DashedButton
          color={isSettings ? COLORS.WHITE_LIGHT : undefined}
          icon={Plus}
          variant="large"
          onPress={onCreateTagPress}>
          Create a tag
        </DashedButton>
        <Text style={styles.message}>
          You can select only 3 tags to be active
        </Text>
        <ScrollView style={styles.itemsWrapper}>
          {tags.map(({ _id, name, color }) => {
            return (
              <SelectTagItem
                isSettings={isSettings}
                key={_id}
                checked={currentSelectedTags.includes(_id)}
                onPress={() => {
                  selectTagHandler(_id);
                  vibrate();
                }}
                onEditPress={() => {
                  onEditTagPress(_id);
                  vibrate();
                }}
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
