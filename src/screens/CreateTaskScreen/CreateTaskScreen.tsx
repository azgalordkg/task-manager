import React, { FC, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Animated } from 'react-native';

import { TaskMenu } from '@/components/features';
import { CreateTaskForm } from '@/components/forms';
import { ConfirmModal } from '@/components/modals';
import { ModalScreenWrapper } from '@/components/ui';
import { useTagManageContext, useTasksContext } from '@/context/hooks';
import { createTask, deleteOneTask, updateTask } from '@/services';
import { CreateTaskData, ScreenProps, UpdateTaskData } from '@/types';
import { vibrate } from '@/utils';

export const CreateTaskScreen: FC<ScreenProps<'CreateTask'>> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const { fetchList } = useTasksContext();
  const { selectedTags, clearSelectedTags } = useTagManageContext();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [taskManagerVisible, setTaskManagerVisible] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const taskId = route?.params?.id;
  const isUnscheduled = route?.params?.isUnscheduled;
  const taskStartDate = route?.params?.startDate;

  const scale = useRef(new Animated.Value(0)).current;
  const title = taskId ? t('EDIT') : t('CREATE');

  const handleShowConfirmModal = () => {
    setTaskManagerVisible(false);
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

  const handleTaskManagerVisible = () => {
    setTaskManagerVisible(prevState => !prevState);
  };

  return (
    <ModalScreenWrapper
      doneText={`${t('SUBMIT_TITLE')}`}
      onDonePress={
        isDescriptionFocused ? () => setIsDescriptionFocused(false) : undefined
      }
      rightActionComponent={
        taskId &&
        !isDescriptionFocused && (
          <TaskMenu
            scale={scale}
            handleDeleteTask={handleShowConfirmModal}
            handleModalVisible={handleTaskManagerVisible}
            taskManagerVisible={taskManagerVisible}
          />
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
