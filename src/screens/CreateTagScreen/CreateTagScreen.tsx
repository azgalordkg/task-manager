import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CreateLabelForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { ScreenProps } from '@/types';

export const CreateTagScreen: FC<ScreenProps<'CreateTag'>> = ({
  navigation,
  route,
}) => {
  const taskId = route?.params?.id;
  const handleCloseModal = () => navigation.goBack();
  const { t } = useTranslation();

  return (
    <ModalWrapper
      title={`${taskId ? `${t('EDIT')}` : `${t('CREATE')}`} ${t('A_LABEL')}`}
      onRequestClose={handleCloseModal}>
      <CreateLabelForm editItemId={taskId} onClose={handleCloseModal} />
    </ModalWrapper>
  );
};
