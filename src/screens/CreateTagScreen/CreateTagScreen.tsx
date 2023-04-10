import React, { FC } from 'react';

import { CreateLabelForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { ScreenProps } from '@/types';

export const CreateTagScreen: FC<ScreenProps<'CreateTag'>> = ({
  navigation,
  route,
}) => {
  const taskId = route?.params?.id;
  const handleCloseModal = () => navigation.goBack();

  return (
    <ModalWrapper onRequestClose={handleCloseModal}>
      <CreateLabelForm editItemId={taskId} onClose={handleCloseModal} />
    </ModalWrapper>
  );
};
