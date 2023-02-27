import React, { FC, useEffect, useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import { MemoizedAccordionContent } from '@/components/ui/AccordionContent';
import { AccordionHeader } from '@/components/ui/AccordionHeader';
import { Loader } from '@/components/ui/Loader';
import { sortTasksForRender } from '@/utils';

import styles from './TaskList.styles';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({ list, onItemPress, onEditPress }) => {
  const sections = () => {
    return (
      list &&
      sortTasksForRender(list).map((dateKey, index) => {
        return {
          id: index,
          title: dateKey,
          content: list[dateKey],
        };
      })
    );
  };

  const sectionsList = sections() || [];

  const [activeSection, setActiveSection] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  const fillActiveSection = () => {
    return sectionsList?.forEach((sectionsItem, index) => {
      const itemDate = new Date(+sectionsItem.title).getDay();
      const isToday = itemDate === new Date().getDay();

      if (isToday) {
        return setActiveSection([index]);
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

  const handleClickSections = (activeSections: number[]) => {
    setActiveSection(activeSections);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
          onChange={handleClickSections}
          expandMultiple={true}
          containerStyle={styles.containerStyle}
        />
      )}
    </>
  );
};
