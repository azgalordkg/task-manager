import { useContext } from 'react';

import { ModalContextType } from '@/contexts/modal';
import { ModalContext } from '@/contexts/modal/modal.context';

export const useModalOpen = () => {
  const { createModalVisible, setCreateModalVisible } = useContext(
    ModalContext,
  ) as ModalContextType;

  return {
    createModalVisible,
    setCreateModalVisible,
  };
};
