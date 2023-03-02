import { TagsResponseItem } from '@/types';

export interface Props {
  tags: TagsResponseItem[];
  onAddPress: () => void;
}
