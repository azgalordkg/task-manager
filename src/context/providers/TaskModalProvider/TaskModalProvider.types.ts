import { TasksResponseItem } from '@/types';

export interface TaskListContextType {
  taskList: TasksResponseItem[];
  fetchList: (targetDate?: number) => void;
}
