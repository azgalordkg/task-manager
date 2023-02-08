export interface CreateTaskData {
  name: string;
  description?: string;
  startDate: Date;
}

export interface TasksResponseItem {
  _id: string;
  name: string;
  isDone?: number;
  description?: string;
}

export type CreateTaskKey = keyof CreateTaskData;
