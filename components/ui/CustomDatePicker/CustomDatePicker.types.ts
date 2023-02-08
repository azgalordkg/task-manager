import {DatePickerProps} from 'react-native-date-picker';
import {Control} from 'react-hook-form/dist/types';
import {CreateTaskData, CreateTaskKey} from '../../../types';

export interface Props extends Partial<DatePickerProps> {
  title?: string;
  // onDateChange: (date: Date) => void;
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
}
