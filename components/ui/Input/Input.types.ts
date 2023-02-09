import {Control} from 'react-hook-form/dist/types';
import {TextInputProps} from 'react-native';
import {CreateTaskData, CreateTaskKey} from '../../../types';
import {ReactNode} from 'react';

export interface Props extends TextInputProps {
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
  isDateTime?: boolean;
  isTime?: boolean;
  Icon?: ReactNode;
}
