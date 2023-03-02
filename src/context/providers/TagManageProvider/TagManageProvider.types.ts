import { TagsResponseItem } from '@/types';

export interface TagManageContextType {
  selectedTags: string[];
  currentSelectedTags: string[];
  selectTagHandler: (tagId: string) => void;
  clearSelectedTags: () => void;
  acceptSelectedTags: () => void;
  updateCurrentSelectedTags: () => void;
  removeTag: (tagId: string) => void;
  defaultTags: TagsResponseItem[];
  customTags: TagsResponseItem[];
  fetchCustomTags: () => void;
  fetchDefaultTags: () => void;
}