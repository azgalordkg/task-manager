import React, { FC, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ContextMenuButton } from '@/components/features';
import { CreateTaskForm } from '@/components/forms';
import { ConfirmModal } from '@/components/modals';
import { ModalWrapper } from '@/components/ui';
import { useTagManageContext, useTaskModalContext } from '@/context/hooks';
import { createTask, deleteOneTask, updateTask } from '@/services';
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

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleShowConfirmModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

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

  const handleDeleteTask = () => {
    if (taskId) {
      deleteOneTask(taskId);
    }
    closeModal();
    handleShowConfirmModal();
    fetchList();
  };

  const title = taskId ? t('EDIT') : t('CREATE');

  return (
    <ModalWrapper
      rightActionComponent={
        taskId && <ContextMenuButton onPress={handleShowConfirmModal} />
      }
      title={`${title} ${t('TASK')}`}
      onRequestClose={closeModal}>
      <CreateTaskForm
        onAddPress={addTagsHandler}
        editItemId={taskId}
        onSubmit={createTaskHandler}
      />

      <ConfirmModal
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowConfirmModal}
      />
    </ModalWrapper>
  );
};
