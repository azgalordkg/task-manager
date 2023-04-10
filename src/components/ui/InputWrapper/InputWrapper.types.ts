import { FC } from 'react';

import { DefaultSvgProps } from '@/types';

export interface Props {
  icon?: FC<DefaultSvgProps>;
  iconColor?: string;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
}
