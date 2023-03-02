import React, { FC } from 'react';

import { CreateTagForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { ScreenProps } from '@/types';

export const CreateTagScreen: FC<ScreenProps<'CreateTag'>> = ({
  navigation,
}) => {
  const handleCloseModal = () => navigation.goBack();

  return (
    <ModalWrapper onRequestClose={() => navigation.goBack()}>
      <CreateTagForm onClose={handleCloseModal} />
    </ModalWrapper>
  );
};
