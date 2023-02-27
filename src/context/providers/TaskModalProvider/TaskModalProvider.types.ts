import { TasksList } from '@/types';

export interface TaskListContextType {
  taskList: TasksList;
  fetchList: () => void;
}
