import React, { FC, useEffect, useMemo, useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import {
  AccordionHeader,
  Loader,
  MemoizedAccordionContent,
} from '@/components/ui';
import { sortTasksForRender } from '@/utils';

import styles from './TaskList.styles';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({
  list = {},
  onItemPress,
  onEditPress,
}) => {
  const [activeSection, setActiveSection] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionsList = useMemo(
    () =>
      sortTasksForRender(list).map((date, index) => ({
        id: index,
        title: date,
        content: list[date],
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

  return (
    <Accordion
      sections={sectionsList}
      activeSections={activeSection}
      renderHeader={section => (
        <AccordionHeader
          activeSection={activeSection}
          id={section.id}
          title={section.title}
          isContent={!!section.content.length}
        />
      )}
      renderContent={section => (
        <MemoizedAccordionContent
          content={section.content}
          onItemPress={onItemPress}
          onEditPress={onEditPress}
        />
      )}
      onChange={setActiveSection}
      expandMultiple={true}
      containerStyle={styles.containerStyle}
    />
  );
};
