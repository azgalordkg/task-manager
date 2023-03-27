import { TasksResponseItem } from '@/types';

export interface Props {
  content: TasksResponseItem[];
  title: string;
  onItemPress: (id: string) => void;
  onDeletePress: (id: string) => void;
}
