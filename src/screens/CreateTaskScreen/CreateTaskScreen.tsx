import React, { FC } from 'react';
import { FieldValues } from 'react-hook-form';

import { CreateTaskForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { useTagManageContext, useTaskModalContext } from '@/context/hooks';
import { createTask, updateTask } from '@/services';
import { CreateTaskData, ScreenProps, UpdateTaskData } from '@/types';

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

    fetchList();
    clearSelectedTags();
    closeModal();
  };

  const addTagsHandler = () => {
    navigation.navigate('ManageTags');
  };

  return (
    <ModalWrapper onRequestClose={closeModal}>
      <CreateTaskForm
        onAddPress={addTagsHandler}
        editItemId={taskId}
        onSubmit={createTaskHandler}
      />
    </ModalWrapper>
  );
};
