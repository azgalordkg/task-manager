import { ILabelItem } from '@/types/labels';

export const prepareTagsForRender = (
  labels: ILabelItem[] = [],
  allTags: ILabelItem[],
) => {
  return labels
    .map(label => {
      return allTags?.find(({ id }) => label.id === id);
    })
    .filter(item => item) as ILabelItem[];
};
