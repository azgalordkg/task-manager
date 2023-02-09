import { Control } from 'react-hook-form/dist/types';
import { DatePickerProps } from 'react-native-date-picker';

import { CreateTaskData, CreateTaskKey } from '@/types';

export interface Props extends Partial<DatePickerProps> {
  title?: string;
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
  label?: string;
  inputWidth?: string | number;
}
