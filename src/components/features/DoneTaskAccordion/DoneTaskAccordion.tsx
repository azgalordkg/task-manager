import React, { FC, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { ArrowDown, ArrowForward } from '@/components/icons';
import { MemoizedAccordionContent } from '@/components/ui';
import { useTaskModalContext, useThemeContext } from '@/context/hooks';
import { filterTasks } from '@/utils';

import styles from './DoneTaskAccordion.styles';
import { Props } from './DoneTaskAccordion.types';

export const DoneTaskAccordion: FC<Props> = ({
  onItemPress,
  onDeletePress,
  isUnscheduled,
}) => {
  const { taskList, unscheduledTaskList } = useTaskModalContext();
  const { theme } = useThemeContext();
  const [activeSection, setActiveSection] = useState([0]);

  const tasks = isUnscheduled ? unscheduledTaskList : taskList;
  const completeTasks = filterTasks(tasks, 'complete');
  const style = styles(theme);

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
        <View style={style.titleContainer}>
          <Text style={style.title}>{title}</Text>

          {activeSection.length ? (
            <ArrowDown color={theme.ICONS.SECONDARY} />
          ) : (
            <ArrowForward color={theme.ICONS.SECONDARY} />
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
