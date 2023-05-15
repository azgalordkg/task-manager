import { RecurringTypes } from '@/types';

export interface Task {
  id: number;
  name: string;
  description: string;
  hasDeadline: boolean;
  priority: number;
  repeat: RecurringTypes;
  startDate: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  labels: number[];
  isDone: boolean;
}

export interface AllTasksResponse {
  taskList: Task[];
  unscheduledTaskList: Task[];
  overdueTaskList: Task[];
}

export interface TaskCreateOrEdit {
  path?: string;
  userData: Task;
}

export interface TasksState {
  taskList: Task[] | null;
  unscheduledTasks: Task[] | null;
  overdueTasks: Task[] | null;
}
