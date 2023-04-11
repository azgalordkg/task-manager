import { DefaultSvgProps } from '@/types';

export interface Props extends DefaultSvgProps {
  checked?: boolean;
  checkmarkColor?: string;
  type?: 'filled' | 'outline';
}
