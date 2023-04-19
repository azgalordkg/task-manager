import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ManageLabelsForm } from '@/components/forms';
import { ModalScreenWrapper } from '@/components/ui';
import { useTagManageContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

export const ManageLabelsScreen: FC<ScreenProps<'ManageLabels'>> = ({
  navigation,
}) => {
  const { updateCurrentSelectedTags, acceptSelectedTags } =
    useTagManageContext();
  const handleCloseModal = () => navigation.goBack();
  const { t } = useTranslation();

  return (
    <ModalScreenWrapper
      onRequestClose={() => {
        handleCloseModal();
        updateCurrentSelectedTags();
      }}
      onDonePress={() => {
        acceptSelectedTags();
        handleCloseModal();
      }}
      doneText={`${t('SUBMIT_TITLE')}`}
      title={`${t('SELECT_LABELS')}`}>
      <ManageLabelsForm
        onEditTagPress={id => navigation.navigate('CreateLabel', { id })}
        onCreateTagPress={() => navigation.navigate('CreateLabel')}
      />
    </ModalScreenWrapper>
  );
};
