import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from 'react-native-collapsible/Accordion';

import {
  AccordionHeader,
  ConfirmModal,
  Loader,
  MemoizedAccordionContent,
} from '@/components/ui';
import { useTaskModalContext } from '@/context/hooks';
import { deleteOneTask } from '@/services';
import { isDateToday } from '@/utils';

import styles from './TaskList.styles';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({ sections = [], onItemPress }) => {
  const [activeSection, setActiveSection] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const { fetchList } = useTaskModalContext();
  const { t } = useTranslation();

  const fillActiveSection = () => {
    return sections?.forEach((sectionsItem, index) => {
      const date = moment(new Date(+sectionsItem.title));

      if (isDateToday(date)) {
        setActiveSection(prevState => [...prevState, index]);
      }
    });
  };

  useEffect(() => {
    fillActiveSection();
  }, [sections]);

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
      <Accordion
        sections={sections}
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
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </>
  );
};
