export interface CreateTaskData {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  hasDeadline?: boolean;
}

export interface UpdateTaskData extends CreateTaskData {
  _id: string;
}

export interface TasksResponseItem {
  _id: string;
  name: string;
  isDone: boolean;
  description?: string;
  startDate?: number;
  endDate?: number;
  hasDeadline?: boolean;
}

export interface TasksList {
  [key: string]: TasksResponseItem[];
}

export type CreateTaskKey = keyof CreateTaskData;
