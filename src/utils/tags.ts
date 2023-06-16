import { LabelTypes } from '@/types/labels';

export const prepareTagsForRender = (
  labels: LabelTypes[] = [],
  allTags: LabelTypes[],
) => {
  return labels
    .map(label => {
      return allTags?.find(({ id }) => label.id === id);
    })
    .filter(item => item) as LabelTypes[];
};
