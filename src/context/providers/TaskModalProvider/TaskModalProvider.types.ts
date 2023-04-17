import { TasksResponseItem } from '@/types';

export interface TaskListContextType {
  taskList: TasksResponseItem[];
  unscheduledTaskList: TasksResponseItem[];
  fetchList: () => void;
  targetDate: number;
  handleTaskDateChange: (date: number) => void;
}
