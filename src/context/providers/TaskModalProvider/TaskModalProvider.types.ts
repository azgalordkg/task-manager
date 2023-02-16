import { TasksList } from '@/types';

export interface TaskListContextType {
  taskList: TasksList;
  visible: boolean;
  fetchList: () => void;
  taskId?: string;
  modalVisibleHandler: (value: boolean) => void;
  onSetTaskIdHandler: (id?: string) => void;
}
