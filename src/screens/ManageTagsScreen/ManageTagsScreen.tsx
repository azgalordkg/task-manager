import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ManageTagsForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { useTagManageContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

export const ManageTagsScreen: FC<ScreenProps<'ManageTags'>> = ({
  navigation,
}) => {
  const { updateCurrentSelectedTags } = useTagManageContext();
  const handleCloseModal = () => navigation.goBack();
  const { t } = useTranslation();

  return (
    <ModalWrapper
      onRequestClose={() => {
        handleCloseModal();
        updateCurrentSelectedTags();
      }}
      title={`${t('SELECT_LABELS')}`}>
      <ManageTagsForm
        onClose={handleCloseModal}
        onEditTagPress={id => navigation.navigate('CreateTag', { id })}
        onCreateTagPress={() => navigation.navigate('CreateTag')}
      />
    </ModalWrapper>
  );
};
