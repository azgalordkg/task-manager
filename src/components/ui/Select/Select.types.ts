import { FC } from 'react';
import { Control } from 'react-hook-form';

import { CreateTaskData, CreateTaskKey, DefaultSvgProps } from '@/types';

export interface Item {
  label: string;
  value: string;
}

export interface Props {
  name: CreateTaskKey;
  control: Control<CreateTaskData>;
  label: string;
  items: Item[];
  icon?: FC<DefaultSvgProps>;
}
