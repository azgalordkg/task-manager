import { UseFormReturn } from 'react-hook-form';

import { ILabelItem } from '@/types';

export interface Props {
  onClose: () => void;
  editItemId?: number;
  formHandler: UseFormReturn<ILabelItem, any>;
  findLabel?: Required<ILabelItem>;
}
