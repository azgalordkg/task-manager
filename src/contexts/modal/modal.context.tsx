import React, { createContext, useMemo, useState } from 'react';

import {
  IModalProviderProps,
  ModalContextType,
} from '@/contexts/modal/modal.types';

export const ModalContext = createContext<boolean | ModalContextType>(false);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);

  const modalProviderValue = useMemo(
    () => ({ createModalVisible, setCreateModalVisible }),
    [createModalVisible, setCreateModalVisible],
  );

  return (
    <ModalContext.Provider value={modalProviderValue}>
      {children}
    </ModalContext.Provider>
  );
};
