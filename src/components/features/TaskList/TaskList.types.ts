import { TasksList } from '@/types';

export interface Props {
  list?: TasksList;
  onItemPress: (id: string) => void;
}
