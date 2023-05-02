import React, { FC, useEffect, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Animated } from 'react-native';

import { ContextMenuButton } from '@/components/features';
import { CreateTaskForm } from '@/components/forms';
import { ConfirmModal } from '@/components/modals';
import { TaskManagerModal } from '@/components/modals/TaskManagerModal';
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
    handleTaskManagerVisible();
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

  useEffect(() => {
    Animated.timing(scale, {
      toValue: taskManagerVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [taskManagerVisible]);

  return (
    <ModalScreenWrapper
      doneText={`${t('SUBMIT_TITLE')}`}
      onDonePress={
        isDescriptionFocused ? () => setIsDescriptionFocused(false) : undefined
      }
      rightActionComponent={
        taskId &&
        !isDescriptionFocused && (
          <ContextMenuButton onPress={handleTaskManagerVisible} />
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

      <TaskManagerModal
        scale={scale}
        handleDeleteTask={handleShowConfirmModal}
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
