export interface TaskBase {
  name: string;
  description?: string;
  hasDeadline?: boolean;
  repeat?: 'Never' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly';
  isHidden?: boolean;
  repeatId?: string;
}

export interface CreateTaskData extends TaskBase {
  startDate: Date;
  endDate: Date;
}

export interface UpdateTaskData extends CreateTaskData {
  _id: string;
}

export interface TasksResponseItem extends TaskBase {
  _id: string;
  isDone: boolean;
  startDate?: number;
  endDate?: number;
}

export interface TasksList {
  [key: string]: TasksResponseItem[];
}

export type CreateTaskKey = keyof CreateTaskData;
