import React, { FC } from 'react';

// import { Text, View } from 'react-native';
import { FormContentWrapper } from '@/components/ui';

// import styles from './ManageTagsForm.styles';
import { Props } from './ManageTagsForm.types';

export const ManageTagsForm: FC<Props> = () => {
  return (
    <FormContentWrapper
      submitTitle="Accept"
      title="Manage Tags"
      onSubmitPress={() => {}}
    />
  );
};
