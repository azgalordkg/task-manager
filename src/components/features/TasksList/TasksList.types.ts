import { TasksResponseItem } from '@/types';

export interface Props {
  tasks?: TasksResponseItem[];
  onDeletePress: (id: string, isQuick?: boolean) => void;
  onItemPress: (id: string) => void;
  title?: string;
}
