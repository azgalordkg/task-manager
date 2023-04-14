import { t } from 'i18next';
import moment from 'moment/moment';

import { COLORS } from '@/constants';
import { PRIORITIES } from '@/constants/tasks';
import { Priority, TasksResponseItem } from '@/types';
import { formatDate } from '@/utils/date';

export const filterTasks = (
  tasks: TasksResponseItem[],
  filterType: 'incomplete' | 'complete',
) => {
  if (filterType === 'incomplete') {
    return tasks.filter(task => !task.isDone);
  }
  if (filterType === 'complete') {
    return tasks.filter(task => task.isDone);
  }
};

export const getPriorityObject = (
  isDark: boolean,
  priorityId?: number,
): Priority => {
  if (!priorityId || priorityId === 4) {
    return {
      ...PRIORITIES[3],
      ...(!isDark ? { color: COLORS.GREY_LIGHT } : {}),
    };
  }
  return PRIORITIES.find(priority => priority.id === priorityId) as Priority;
};

export const getDayTitle = (date: Date) => {
  const momentDate = moment(date);
  const formattedDate = formatDate(date, 'D MMM');
  const today = moment().startOf('day');
  const tomorrow = moment().add(1, 'day').startOf('day');
  const dayOfWeek = formatDate(date, 'dddd');
  let todayOrTomorrow = '';

  if (momentDate.isSame(today, 'day')) {
    todayOrTomorrow = `• ${t('TODAY')}`;
  } else if (moment(date).isSame(tomorrow, 'day')) {
    todayOrTomorrow = `• ${t('TOMORROW')}`;
  }

  return `${formattedDate} ${todayOrTomorrow} • ${dayOfWeek}`;
};
