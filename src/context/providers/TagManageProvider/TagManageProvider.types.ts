import { TagsResponseItem } from '@/types';

export interface TagManageContextType {
  selectedTags: string[];
  currentSelectedTags: string[];
  selectTagHandler: (tagId: string) => void;
  clearSelectedTags: () => void;
  acceptSelectedTags: () => void;
  updateCurrentSelectedTags: () => void;
  removeTag: (tagId: string) => void;
  tags: TagsResponseItem[];
  fetchTags: () => void;
  setTagsForEdit: (tags: string[]) => void;
}
