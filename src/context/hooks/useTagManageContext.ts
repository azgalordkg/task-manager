import { useContext } from 'react';

import { TagManageContext } from '../providers';

export const useTagManageContext = () => {
  const {
    selectedTags,
    clearSelectedTags,
    selectTagHandler,
    currentSelectedTags,
    acceptSelectedTags,
    updateCurrentSelectedTags,
    removeTag,
  } = useContext(TagManageContext);

  return {
    selectedTags,
    clearSelectedTags,
    selectTagHandler,
    currentSelectedTags,
    acceptSelectedTags,
    updateCurrentSelectedTags,
    removeTag,
  };
};
