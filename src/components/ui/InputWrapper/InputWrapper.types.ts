import { FC } from 'react';

import { DefaultSvgProps } from '@/types';

export interface Props {
  icon?: FC<DefaultSvgProps>;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
}
