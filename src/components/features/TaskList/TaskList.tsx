import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DoneTaskAccordion, QuickTask } from '@/components/features';
import { ConfirmModal, ListItem, Loader } from '@/components/ui';
import { useTaskModalContext, useThemeContext } from '@/context/hooks';
import { deleteOneTask, markTaskAsDone } from '@/services';
import { filterTasks } from '@/utils';

import styles from './TaskList.styles';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({ onItemPress, date }) => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const { taskList, fetchList } = useTaskModalContext();

  const [loading, setLoading] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const style = styles(theme);
  const incompleteTasks = filterTasks(taskList, 'incomplete');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {incompleteTasks?.map(task => {
        const { description, _id, isDone, name, tags, startDate, hasDeadline } =
          task;
        return (
          <ListItem
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

      <View style={style.buttonContainer}>
        <QuickTask date={date.toString()} />
      </View>

      <DoneTaskAccordion
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
