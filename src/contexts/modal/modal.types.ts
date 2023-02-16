import { Dispatch, SetStateAction } from 'react';

export interface IModalProviderProps {
  children: JSX.Element;
}

export interface ModalContextType {
  createModalVisible: boolean;
  setCreateModalVisible: Dispatch<SetStateAction<boolean>>;
}
