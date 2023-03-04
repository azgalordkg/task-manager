import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { createDefaultTags, getAllTags } from '@/services';
import { TagsResponseItem } from '@/types';

import { TagManageContextType } from './TagManageProvider.types';

export const TagManageContext = createContext<TagManageContextType>(
  {} as TagManageContextType,
);

export const TagManageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentSelectedTags, setCurrentSelectedTags] = useState<string[]>([]);

  const [tags, setTags] = useState<TagsResponseItem[]>([]);

  const fetchTags = () => {
    setTags(getAllTags());
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

  const setTagsForEdit = (tagsForEdit: string[]) => {
    setSelectedTags(tagsForEdit);
    setCurrentSelectedTags(tagsForEdit);
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
    const currentTags = [...selectedTags.filter(id => id !== tagId)];
    setSelectedTags(currentTags);
    setCurrentSelectedTags(currentTags);
  };

  useEffect(() => {
    void createDefaultTags();
  }, []);

  return (
    <TagManageContext.Provider
      value={{
        selectedTags,
        currentSelectedTags,
        tags,
        setTagsForEdit,
        fetchTags,
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
