import Realm from 'realm';

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
  startDate: Date | null;
  createdAt: Date;
  tags: string[];
}

export interface UpdateTaskData extends CreateTaskData {
  _id: string;
  isDone: boolean;
}

export interface TasksResponseItem extends TaskBase {
  _id: string;
  isDone: boolean;
  startDate?: number;
  createdAt: number;
  tags: string[];
}

export interface TasksList {
  [key: string]: TasksResponseItem[];
}

export interface TaskSection {
  id: number;
  title: string;
  content: TasksResponseItem[];
}

export type CreateTaskKey = keyof CreateTaskData;

export type RealmTaskType = Realm.Results<Realm.Object> | any[];
