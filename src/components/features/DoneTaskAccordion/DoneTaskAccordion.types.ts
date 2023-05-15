import { Task } from '@/store/apis/tasks/tasks.types';

export interface Props {
  onItemPress: (id: string) => void;
  onDeletePress: (id: string, isQuick?: boolean) => void;
  tasks?: Task[];
}
