import { t } from 'i18next';
import moment from 'moment/moment';

import { COLORS } from '@/constants';
import { PRIORITIES } from '@/constants/tasks';
import { getAllTasks } from '@/services';
import { Priority, SchemeType, TasksResponseItem } from '@/types';
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

export const getDayTitle = (date: Date, locale?: string) => {
  const momentDate = moment(date);
  const formattedDate = formatDate(date, 'D MMM', locale);
  const today = moment().startOf('day');
  const tomorrow = moment().add(1, 'day').startOf('day');
  const dayOfWeek = formatDate(date, 'dddd', locale);
  let todayOrTomorrow = '';

  if (momentDate.isSame(today, 'day')) {
    todayOrTomorrow = `• ${t('TODAY')}`;
  } else if (moment(date).isSame(tomorrow, 'day')) {
    todayOrTomorrow = `• ${t('TOMORROW')}`;
  }

  return `${formattedDate} ${todayOrTomorrow} • ${dayOfWeek}`;
};

export const getDottedDays = (theme: SchemeType) => {
  const tasks = getAllTasks() as TasksResponseItem[];
  const uniqueDates = new Set<string>();

  tasks.forEach(task => {
    const taskStartDate = moment(task.startDate);
    const today = moment();

    if (today.isSameOrBefore(taskStartDate, 'day')) {
      uniqueDates.add(taskStartDate.format('YYYY-MM-DD'));
    }
  });

  return Array.from(uniqueDates).map(dateItem => {
    return {
      [dateItem]: {
        marked: true,
        dotColor: theme.TEXT.ACCENT,
      },
    };
  });
};
