import { TasksList } from '@/types';

export interface IModalProviderProps {
  children: JSX.Element;
}

export interface TaskListContextType {
  taskList?: TasksList;
  fetchList: () => void;
}
