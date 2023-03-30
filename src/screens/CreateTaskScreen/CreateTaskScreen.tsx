import React, { FC } from 'react';
import { FieldValues } from 'react-hook-form';

import { CreateTaskForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { useTagManageContext, useTaskModalContext } from '@/context/hooks';
import { createTask, updateTask } from '@/services';
import { CreateTaskData, ScreenProps, UpdateTaskData } from '@/types';
import { vibrate } from '@/utils';

export const CreateTaskScreen: FC<ScreenProps<'CreateTask'>> = ({
  navigation,
  route,
}) => {
  const { fetchList } = useTaskModalContext();
  const { selectedTags, clearSelectedTags } = useTagManageContext();
  const taskId = route?.params?.id;

  const closeModal = () => {
    navigation.goBack();
  };

  const createTaskHandler = (data: FieldValues) => {
    const requestData = { ...data, tags: selectedTags };

    if (taskId) {
      updateTask({ ...requestData, _id: taskId } as UpdateTaskData);
    } else {
      createTask(requestData as CreateTaskData);
    }

    vibrate('impactHeavy');
    fetchList();
    clearSelectedTags();
    closeModal();
  };

  const addTagsHandler = () => {
    vibrate('selection');
    navigation.navigate('ManageTags');
  };

  return (
    <ModalWrapper onRequestClose={closeModal}>
      <CreateTaskForm
        onClose={closeModal}
        onAddPress={addTagsHandler}
        editItemId={taskId}
        onSubmit={createTaskHandler}
      />
    </ModalWrapper>
  );
};
