import { useContext } from 'react';

import { EditTaskId } from '@/contexts';
import { EditTaskIdType } from '@/contexts/editTaskId/editTaskId.types';

export const useEditedTaskIdList = () => {
  const { editItemId, setEditItemId } = useContext(
    EditTaskId,
  ) as EditTaskIdType;

  return {
    editItemId,
    setEditItemId,
  };
};
