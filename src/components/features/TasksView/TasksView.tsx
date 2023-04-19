import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DoneTaskAccordion, QuickTask, TasksList } from '@/components/features';
import { NotFoundPlaceholder } from '@/components/icons/NotFoundPlaceholder';
import { ConfirmModal } from '@/components/modals';
import { EmptyTaskList } from '@/components/ui';
import { useTasksContext } from '@/context/hooks';
import { deleteOneTask } from '@/services';
import { filterTasks, getFilteredTasksBySearch } from '@/utils';

import styles from './TasksView.styles';
import { Props } from './TasksView.types';

export const TasksView: FC<Props> = ({
  onItemPress,
  isUnscheduled,
  isUpcoming,
  currentTasksTitle,
}) => {
  const { t } = useTranslation();
  const {
    taskList,
    unscheduledTaskList,
    overdueTaskList,
    inputVisible,
    fetchList,
    searchValue,
  } = useTasksContext();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const tasks = isUnscheduled ? unscheduledTaskList : taskList;
  const filteredTasks = useMemo(
    () => getFilteredTasksBySearch(tasks, searchValue),
    [searchValue, tasks],
  );
  const filteredOverdueTasks = useMemo(
    () => getFilteredTasksBySearch(overdueTaskList, searchValue),
    [searchValue, overdueTaskList],
  );

  const incompleteTasks = filterTasks(filteredTasks, 'incomplete');
  const completedTasks = filterTasks(filteredTasks, 'complete');

  const isNotFound =
    tasks.length && !filteredTasks.length && !filteredOverdueTasks.length;

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

  return isNotFound ? (
    <View style={styles.emptyContainer}>
      <EmptyTaskList title={`${t('NO_MATCHES')}`} image={NotFoundPlaceholder} />
    </View>
  ) : (
    <>
      {!isUnscheduled && !isUpcoming && !!filteredOverdueTasks.length && (
        <TasksList
          title={`${t('OVERDUE')}`}
          tasks={filteredOverdueTasks}
          onDeletePress={handleDeletePress}
          onItemPress={onItemPress}
        />
      )}

      <TasksList
        title={currentTasksTitle}
        tasks={incompleteTasks}
        onDeletePress={handleDeletePress}
        onItemPress={onItemPress}
      />

      {!isUnscheduled && !isUpcoming && !inputVisible && (
        <View style={styles.buttonContainer}>
          <QuickTask />
        </View>
      )}

      <DoneTaskAccordion
        tasks={completedTasks}
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