import React, { FC, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { ArrowDown, ArrowForward } from '@/components/icons';
import { MemoizedAccordionContent } from '@/components/ui';
import { COLORS } from '@/constants';
import { useTaskModalContext } from '@/context/hooks';
import { filterTasks } from '@/utils';

import styles from './DoneTaskAccordion.styles';
import { Props } from './DoneTaskAccordion.types';

export const DoneTaskAccordion: FC<Props> = ({
  onItemPress,
  onDeletePress,
  isUnscheduled,
}) => {
  const { taskList, unscheduledTaskList } = useTaskModalContext();
  const tasks = isUnscheduled ? unscheduledTaskList : taskList;
  const completeTasks = filterTasks(tasks, 'complete');
  const [activeSection, setActiveSection] = useState([0]);

  const sections = {
    title: 'Completed',
    content: completeTasks,
  };

  if (!sections.content?.length) {
    return null;
  }

  return (
    <Accordion
      touchableComponent={TouchableWithoutFeedback}
      sections={[sections]}
      activeSections={activeSection}
      renderHeader={({ title }) => (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>

          {activeSection.length ? (
            <ArrowDown color={COLORS.GREY_ICONS} />
          ) : (
            <ArrowForward color={COLORS.GREY_ICONS} />
          )}
        </View>
      )}
      renderContent={({ content }) => (
        <MemoizedAccordionContent
          content={content}
          onDeletePress={onDeletePress}
          onItemPress={onItemPress}
        />
      )}
      onChange={setActiveSection}
    />
  );
};
