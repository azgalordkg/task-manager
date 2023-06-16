import { UseFormReturn } from 'react-hook-form';

import { LabelTypes } from '@/types/labels';

export interface Props {
  onClose: () => void;
  editItemId?: number;
  formHandler: UseFormReturn<LabelTypes, any>;
  findLabel?: Required<LabelTypes>;
}
