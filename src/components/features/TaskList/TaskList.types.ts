import { ScreenProps, TasksList } from '@/types';

export interface Props extends Partial<ScreenProps> {
  list?: TasksList;
  fetchList: () => void;
}
