import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import {
  AuthFormValuesKey,
  CreateTaskKey,
  ResetPasswordFormValuesKey,
} from '@/types';

export interface Props extends TextInputProps {
  control: Control<any>;
  defaultValue?: string;
  name: CreateTaskKey | AuthFormValuesKey | ResetPasswordFormValuesKey;
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
  isShowClearIcon?: boolean;
  isSecureInput?: boolean;
  clearAuthErrorMessage?: () => void;
}
