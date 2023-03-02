import { useContext } from 'react';

import { TagManageContext } from '../providers';

export const useTagManageContext = () => {
  const {
    defaultTags,
    customTags,
    fetchCustomTags,
    fetchDefaultTags,
    selectedTags,
    clearSelectedTags,
    selectTagHandler,
    currentSelectedTags,
    acceptSelectedTags,
    updateCurrentSelectedTags,
    removeTag,
  } = useContext(TagManageContext);

  return {
    defaultTags,
    customTags,
    fetchCustomTags,
    fetchDefaultTags,
    selectedTags,
    clearSelectedTags,
    selectTagHandler,
    currentSelectedTags,
    acceptSelectedTags,
    updateCurrentSelectedTags,
    removeTag,
  };
};
