import { FC } from 'react';
import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import { CreateTaskData, CreateTaskKey, DefaultSvgProps } from '@/types';

export interface Props extends TextInputProps {
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
  isDateTime?: boolean;
  isTime?: boolean;
  icon?: FC<DefaultSvgProps>;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
  maxLength?: number;
  textColor?: string;
}
