import { isEqual } from 'lodash';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ManageLabelsForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { useTagManageContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

export const ManageLabelsScreen: FC<ScreenProps<'ManageLabels'>> = ({
  navigation,
}) => {
  const {
    updateCurrentSelectedTags,
    acceptSelectedTags,
    selectedTags,
    currentSelectedTags,
  } = useTagManageContext();
  const handleCloseModal = () => navigation.goBack();
  const { t } = useTranslation();

  const isDisabled = isEqual(selectedTags, currentSelectedTags);

  return (
    <ModalWrapper
      onRequestClose={() => {
        handleCloseModal();
        updateCurrentSelectedTags();
      }}
      onDonePress={() => {
        acceptSelectedTags();
        handleCloseModal();
      }}
      isDoneDisabled={isDisabled}
      doneText="Done"
      title={`${t('SELECT_LABELS')}`}>
      <ManageLabelsForm
        onEditTagPress={id => navigation.navigate('CreateLabel', { id })}
        onCreateTagPress={() => navigation.navigate('CreateLabel')}
      />
    </ModalWrapper>
  );
};
