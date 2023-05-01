export interface Task {
  id?: number;
  title: string;
}

export interface TaskCreateOrEdit {
  path?: string;
  userData: Task;
}
