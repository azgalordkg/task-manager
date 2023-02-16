import React, { createContext, useMemo, useState } from 'react';

import {
  EditTaskIdType,
  IModalProviderProps,
} from '@/contexts/editTaskId/editTaskId.types';

export const EditTaskId = createContext<string | EditTaskIdType>('');

export const EditTaskIdContextProvider = ({
  children,
}: IModalProviderProps) => {
  const [editItemId, setEditItemId] = useState<string | undefined>();

  const editTaskIdProviderValue = useMemo(
    () => ({ editItemId, setEditItemId }),
    [editItemId, setEditItemId],
  );

  return (
    <EditTaskId.Provider value={editTaskIdProviderValue}>
      {children}
    </EditTaskId.Provider>
  );
};
