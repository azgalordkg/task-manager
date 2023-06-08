import { TagsResponseItem } from '@/types';

export const prepareTagsForRender = (
  tags: number[],
  allTags: TagsResponseItem[],
) => {
  return tags
    ?.map(tag => allTags.find(({ id }) => tag === id))
    .filter(item => item) as TagsResponseItem[];
};
