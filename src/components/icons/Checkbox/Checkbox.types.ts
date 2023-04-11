import { NumberProp } from 'react-native-svg';

import { DefaultSvgProps } from '@/types';

export interface Props extends DefaultSvgProps {
  checked?: boolean;
  type?: 'filled' | 'outline';
  backgroundOpacity?: NumberProp;
}
