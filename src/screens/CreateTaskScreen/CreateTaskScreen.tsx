import React, { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ContextMenuButton } from '@/components/features';
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
  const { t } = useTranslation();
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
    navigation.navigate('ManageLabels');
  };

  const title = taskId ? t('EDIT') : t('CREATE');

  return (
    <ModalWrapper
      rightActionComponent={taskId && <ContextMenuButton />}
      title={`${title} ${t('TASK')}`}
      onRequestClose={closeModal}>
      <CreateTaskForm
        onClose={closeModal}
        onAddPress={addTagsHandler}
        editItemId={taskId}
        onSubmit={createTaskHandler}
      />
    </ModalWrapper>
  );
};
