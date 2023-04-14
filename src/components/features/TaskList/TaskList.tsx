import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DoneTaskAccordion, QuickTask } from '@/components/features';
import { ConfirmModal } from '@/components/modals';
import { ListItem } from '@/components/ui';
import { useTaskModalContext } from '@/context/hooks';
import { deleteOneTask, markTaskAsDone } from '@/services';
import { filterTasks } from '@/utils';

import styles from './TaskList.styles';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({
  onItemPress,
  isUnscheduled,
  isUpcoming,
}) => {
  const { t } = useTranslation();
  const { taskList, unscheduledTaskList, fetchList } = useTaskModalContext();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const tasks = isUnscheduled ? unscheduledTaskList : taskList;
  const incompleteTasks = filterTasks(tasks, 'incomplete');

  const handleShowModal = () => {
    setDeleteId('');
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeletePress = (id: string, isQuick?: boolean) => {
    if (isQuick) {
      deleteOneTask(id);
    } else {
      handleShowModal();
      setDeleteId(id);
    }
  };

  const handleDeleteTask = () => {
    if (deleteId) {
      deleteOneTask(deleteId);
    }
    fetchList();
    handleShowModal();
  };

  return (
    <>
      {incompleteTasks?.map(task => {
        const {
          description,
          _id,
          isDone,
          name,
          tags,
          startDate,
          hasDeadline,
          priority,
        } = task;
        return (
          <ListItem
            priority={priority}
            key={_id}
            description={description}
            checked={isDone}
            id={_id}
            name={name}
            onCheckPress={markTaskAsDone}
            onDeletePress={handleDeletePress}
            isDone={isDone}
            onItemPress={onItemPress}
            tags={tags}
            startDate={startDate}
            hasDeadline={hasDeadline}
          />
        );
      })}

      {!isUnscheduled && !isUpcoming && (
        <View style={styles.buttonContainer}>
          <QuickTask />
        </View>
      )}

      <DoneTaskAccordion
        isUnscheduled={isUnscheduled}
        onItemPress={onItemPress}
        onDeletePress={handleDeletePress}
      />

      <ConfirmModal
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </>
  );
};
