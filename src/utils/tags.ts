import { TagsResponseItem } from '@/types';

export const prepareTagsForRender = (
  tags: string[],
  allTags: TagsResponseItem[],
) => {
  return tags.map(tag =>
    allTags.find(({ _id }) => tag === _id),
  ) as TagsResponseItem[];
};
