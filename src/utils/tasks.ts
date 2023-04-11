import { PRIORITIES } from '@/constants/tasks';
import { Priority, TasksResponseItem } from '@/types';

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

export const getPriorityObject = (priorityId: number): Priority => {
  return PRIORITIES.find(priority => priority.id === priorityId) as Priority;
};
