import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import { AuthFormValuesKey, CreateTaskKey } from '@/types';

export interface Props extends TextInputProps {
  control: Control<any>;
  defaultValue?: string;
  name: CreateTaskKey | AuthFormValuesKey;
  isDateTime?: boolean;
  timeFormat?: string;
  isTime?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
  maxLength?: number;
  borderRadius?: number;
  color?: string;
  isSecureInput?: boolean;
}
