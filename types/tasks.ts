export interface CreateTaskData {
  name: string;
  description?: string;
}

export interface TasksResponseItem {
  _id: string;
  name: string;
  isDone?: number;
  description?: string;
}
