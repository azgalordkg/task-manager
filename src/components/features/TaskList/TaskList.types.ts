import { TasksList } from '@/types';

export interface Props {
  list?: TasksList;
  fetchList: () => void;
  onItemPress: (id: string) => void;
}
