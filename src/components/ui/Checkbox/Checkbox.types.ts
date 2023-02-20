import { Control } from 'react-hook-form/dist/types';

import { CreateTaskData, CreateTaskKey } from '@/types';

export interface Props {
  label: string;
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
  onChange: (value: boolean) => void;
}
