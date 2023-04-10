import { FC } from 'react';
import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import { CreateTaskKey, DefaultSvgProps } from '@/types';

export interface Props extends TextInputProps {
  // TODO Find solution for this any
  control: Control<any>;
  defaultValue?: string;
  name: CreateTaskKey;
  isDateTime?: boolean;
  isTime?: boolean;
  icon?: FC<DefaultSvgProps>;
  iconColor?: string;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
  maxLength?: number;
  color?: string;
}
