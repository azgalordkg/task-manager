import { TasksResponseItem } from '@/types';

export interface Props {
  content: TasksResponseItem[];
  onItemPress: (id: string) => void;
  onEditPress: (id: string) => void;
}
