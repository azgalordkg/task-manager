import React, { FC, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ContextMenuButton } from '@/components/features';
import { CreateTaskForm } from '@/components/forms';
import { ConfirmModal } from '@/components/modals';
import { ModalScreenWrapper } from '@/components/ui';
import { useTagManageContext } from '@/context/hooks';
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetAllTasksQuery,
  useUpdateTaskMutation,
  Task,
} from '@/store/apis/tasks';
import { ScreenProps } from '@/types';
import { vibrate } from '@/utils';

export const CreateTaskScreen: FC<ScreenProps<'CreateTask'>> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const { selectedTags, clearSelectedTags } = useTagManageContext();

  const { refetch: fetchList } = useGetAllTasksQuery();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const taskId = route?.params?.id;
  const isUnscheduled = route?.params?.isUnscheduled;
  const taskStartDate = route?.params?.startDate;

  const handleShowConfirmModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const closeModal = () => {
    navigation.goBack();
  };

  const createTaskHandler = (data: FieldValues) => {
    // TODO потом заменить на as number[]
    const requestData = { ...data, labels: selectedTags as any[] };

    if (taskId) {
      updateTask({ userData: requestData as Task, id: +taskId });
    } else {
      createTask({ userData: requestData as Task });
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
      deleteTask(taskId);
    }
    closeModal();
    handleShowConfirmModal();
    fetchList();
  };

  const title = taskId ? t('EDIT') : t('CREATE');

  return (
    <ModalScreenWrapper
      doneText={`${t('SUBMIT_TITLE')}`}
      onDonePress={
        isDescriptionFocused ? () => setIsDescriptionFocused(false) : undefined
      }
      rightActionComponent={
        taskId &&
        !isDescriptionFocused && (
          <ContextMenuButton onPress={handleShowConfirmModal} />
        )
      }
      title={`${title} ${t('TASK')}`}
      onRequestClose={closeModal}>
      <CreateTaskForm
        isDescriptionFocused={isDescriptionFocused}
        onToggleDescription={setIsDescriptionFocused}
        isUnscheduled={isUnscheduled}
        onAddPress={addTagsHandler}
        editItemId={taskId}
        onSubmit={createTaskHandler}
        taskStartDate={taskStartDate}
      />

      <ConfirmModal
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowConfirmModal}
      />
    </ModalScreenWrapper>
  );
};
