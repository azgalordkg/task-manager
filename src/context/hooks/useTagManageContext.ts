import { useContext } from 'react';

import { TagManageContext } from '../providers';

export const useTagManageContext = () => {
  const {
    tags,
    fetchTags,
    selectedTags,
    clearSelectedTags,
    selectTagHandler,
    currentSelectedTags,
    acceptSelectedTags,
    updateCurrentSelectedTags,
    removeTag,
    setTagsForEdit,
  } = useContext(TagManageContext);

  return {
    tags,
    fetchTags,
    selectedTags,
    clearSelectedTags,
    selectTagHandler,
    currentSelectedTags,
    acceptSelectedTags,
    updateCurrentSelectedTags,
    removeTag,
    setTagsForEdit,
  };
};
