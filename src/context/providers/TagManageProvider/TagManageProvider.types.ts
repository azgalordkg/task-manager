export interface TagManageContextType {
  selectedTags: string[];
  currentSelectedTags: string[];
  selectTagHandler: (tagId: string) => void;
  clearSelectedTags: () => void;
  acceptSelectedTags: () => void;
  updateCurrentSelectedTags: () => void;
}
