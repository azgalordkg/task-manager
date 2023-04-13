import { TasksResponseItem } from '@/types';

export interface TaskListContextType {
  taskList: TasksResponseItem[];
  unscheduledTaskList: TasksResponseItem[];
  fetchList: (targetDate?: number) => void;
}
