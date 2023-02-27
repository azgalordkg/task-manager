import { FC } from 'react';

import { DefaultSvgProps } from '@/types';

export interface Item {
  label: string;
  value: string;
}

export interface Props {
  label: string;
  value: string;
  items: Item[];
  icon?: FC<DefaultSvgProps>;
  onValueChange: (value: string) => void;
}
