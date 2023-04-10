import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import { CreateTaskKey } from '@/types';

export interface Props extends TextInputProps {
  control: Control<any>;
  defaultValue?: string;
  name: CreateTaskKey;
  isDateTime?: boolean;
  isTime?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
  maxLength?: number;
  color?: string;
}
