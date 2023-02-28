export type RecurringTypes =
  | 'Never'
  | 'Daily'
  | 'Weekly'
  | 'Monthly'
  | 'Yearly';

export interface TaskBase {
  name: string;
  description?: string;
  hasDeadline?: boolean;
  repeat?: RecurringTypes;
}

export interface CreateTaskData extends TaskBase {
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

export interface UpdateTaskData extends CreateTaskData {
  _id: string;
  isDone: boolean;
}

export interface TasksResponseItem extends TaskBase {
  _id: string;
  isDone: boolean;
  startDate?: number;
  endDate?: number;
  createdAt: number;
}

export interface TasksList {
  [key: string]: TasksResponseItem[];
}

export type CreateTaskKey = keyof CreateTaskData;
