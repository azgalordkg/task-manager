import { UseFormReturn } from 'react-hook-form';

import { CreateTagData } from '@/types';

export interface Props {
  onClose: () => void;
  editItemId?: string;
  formHandler: UseFormReturn<CreateTagData, any>;
}
