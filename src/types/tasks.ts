export interface CreateTaskData {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
}

export interface UpdateTaskData extends CreateTaskData {
  _id: string;
}

export interface TasksResponseItem {
  _id: string;
  name: string;
  isDone?: number;
  description?: string;
  startDate?: number;
  endDate?: number;
}

export interface TasksList {
  [key: string]: TasksResponseItem[];
}

export type CreateTaskKey = keyof CreateTaskData;
