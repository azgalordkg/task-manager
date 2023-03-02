import React, { FC } from 'react';

import { ManageTagsForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { useTagManageContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

export const ManageTagsScreen: FC<ScreenProps<'ManageTags'>> = ({
  navigation,
}) => {
  const { updateCurrentSelectedTags } = useTagManageContext();
  const handleCloseModal = () => navigation.goBack();

  return (
    <ModalWrapper
      onRequestClose={() => {
        handleCloseModal();
        updateCurrentSelectedTags();
      }}>
      <ManageTagsForm
        onClose={handleCloseModal}
        onCreateTagPress={() => navigation.navigate('CreateTag')}
      />
    </ModalWrapper>
  );
};
