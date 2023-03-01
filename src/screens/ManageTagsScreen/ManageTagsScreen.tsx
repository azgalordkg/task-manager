import React, { FC } from 'react';

import { ManageTagsForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { ScreenProps } from '@/types';

export const ManageTagsScreen: FC<ScreenProps<'ManageTags'>> = ({
  navigation,
}) => {
  return (
    <ModalWrapper onRequestClose={() => navigation.goBack()}>
      <ManageTagsForm />
    </ModalWrapper>
  );
};
