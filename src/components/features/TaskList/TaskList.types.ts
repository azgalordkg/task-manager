import { TaskSection } from '@/types';

export interface Props {
  sections?: TaskSection[];
  onItemPress: (id: string) => void;
}
