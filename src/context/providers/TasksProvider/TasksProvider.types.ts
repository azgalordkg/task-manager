import { TasksResponseItem } from '@/types';

export interface TaskListContextType {
  timeFormat: string;
  taskList: TasksResponseItem[];
  unscheduledTaskList: TasksResponseItem[];
  overdueTaskList: TasksResponseItem[];
  fetchList: () => void;
  targetDate: number;
  handleTaskDateChange: (date: number) => void;
  inputVisible: boolean;
  toggleSearchInput: () => void;
  searchValue: string;
  handleSearchValueChange: (value: string) => void;
}
