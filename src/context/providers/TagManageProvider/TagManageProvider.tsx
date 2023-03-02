import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { getCustomTags, getDefaultTags } from '@/services/realm/tags';
import { TagsResponseItem } from '@/types';

import { TagManageContextType } from './TagManageProvider.types';

export const TagManageContext = createContext<TagManageContextType>(
  {} as TagManageContextType,
);

export const TagManageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentSelectedTags, setCurrentSelectedTags] = useState<string[]>([]);

  const [defaultTags, setDefaultTags] = useState<TagsResponseItem[]>([]);
  const [customTags, setCustomTags] = useState<TagsResponseItem[]>([]);

  const fetchDefaultTags = () => {
    setDefaultTags(getDefaultTags());
  };

  const fetchCustomTags = () => {
    setCustomTags(getCustomTags());
  };

  const selectTagHandler = (tagId: string) => {
    setCurrentSelectedTags(prevState => {
      if (prevState.includes(tagId)) {
        return prevState.filter(id => id !== tagId);
      } else {
        if (prevState.length < 3) {
          return [...prevState, tagId];
        }
        return prevState;
      }
    });
  };

  const clearSelectedTags = () => {
    setSelectedTags([]);
    setCurrentSelectedTags([]);
  };

  const acceptSelectedTags = () => {
    setSelectedTags(currentSelectedTags);
  };

  const updateCurrentSelectedTags = () => {
    setCurrentSelectedTags(selectedTags);
  };

  const removeTag = (tagId: string) => {
    const tags = [...selectedTags.filter(id => id !== tagId)];
    setSelectedTags(tags);
    setCurrentSelectedTags(tags);
  };

  return (
    <TagManageContext.Provider
      value={{
        selectedTags,
        currentSelectedTags,
        defaultTags,
        customTags,
        fetchCustomTags,
        fetchDefaultTags,
        selectTagHandler,
        clearSelectedTags,
        acceptSelectedTags,
        updateCurrentSelectedTags,
        removeTag,
      }}>
      {children}
    </TagManageContext.Provider>
  );
};
