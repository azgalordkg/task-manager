import { TasksResponseItem } from '@/types';

export interface TaskListContextType {
  taskList: TasksResponseItem[];
  fetchList: () => void;
}
