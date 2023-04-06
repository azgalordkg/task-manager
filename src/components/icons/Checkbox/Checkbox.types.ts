import { DefaultSvgProps } from '@/types';

export interface Props extends DefaultSvgProps {
  checked?: boolean;
  type?: 'filled' | 'outline';
}
