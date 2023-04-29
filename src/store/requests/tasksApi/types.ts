export interface ITask {
  id?: number;
  title: string;
}

export interface ITaskCreateOrEdit {
  path?: string;
  userData: ITask;
}
