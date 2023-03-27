import React, { FC, useEffect, useMemo, useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import {
  AccordionHeader,
  ConfirmModal,
  Loader,
  MemoizedAccordionContent,
} from '@/components/ui';
import { useTaskModalContext } from '@/context/hooks';
import { deleteOneTask } from '@/services';
import { sortTasksForRender } from '@/utils';

import styles from './TaskList.styles';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({ list = {}, onItemPress }) => {
  const [activeSection, setActiveSection] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const { fetchList } = useTaskModalContext();

  const sectionsList = useMemo(
    () =>
      sortTasksForRender(list).map((date, index) => ({
        id: index,
        title: date,
        content: list[date].sort((a, b) => +a.isDone - +b.isDone),
      })),
    [list],
  );

  const fillActiveSection = () => {
    return sectionsList?.forEach((sectionsItem, index) => {
      const itemDate = new Date(+sectionsItem.title).getDay();
      const isToday = itemDate === new Date().getDay();

      if (isToday) {
        setActiveSection(prevState => [...prevState, index]);
      }
    });
  };

  useEffect(() => {
    fillActiveSection();
  }, [list]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleShowModal = () => {
    setDeleteId('');
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeletePress = (id: string) => {
    handleShowModal();
    setDeleteId(id);
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
      <Accordion
        sections={sectionsList}
        activeSections={activeSection}
        renderHeader={section => (
          <AccordionHeader
            tasksCurrent={section.content.length}
            activeSection={activeSection}
            id={section.id}
            title={section.title}
          />
        )}
        renderContent={section => (
          <MemoizedAccordionContent
            title={section.title}
            content={section.content}
            onDeletePress={handleDeletePress}
            onItemPress={onItemPress}
          />
        )}
        onChange={setActiveSection}
        expandMultiple={true}
        containerStyle={styles.containerStyle}
      />

      <ConfirmModal
        confirmLabel="Delete"
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </>
  );
};
