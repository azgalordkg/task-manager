import { Dispatch, SetStateAction } from 'react';

export interface IModalProviderProps {
  children: JSX.Element;
}

export interface EditTaskIdType {
  editItemId?: string;
  setEditItemId: Dispatch<SetStateAction<string | undefined>>;
}
