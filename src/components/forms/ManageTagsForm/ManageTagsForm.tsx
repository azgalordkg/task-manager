import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { Plus } from '@/components/icons';
import {
  DashedButton,
  FormContentWrapper,
  SelectTagItem,
} from '@/components/ui';

import styles from './ManageTagsForm.styles';
import { Props } from './ManageTagsForm.types';

export const ManageTagsForm: FC<Props> = () => {
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
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
          <SelectTagItem checked onPress={() => {}} title="Wife" />
        </ScrollView>
      </View>
    </FormContentWrapper>
  );
};
