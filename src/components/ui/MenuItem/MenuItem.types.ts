import { FC } from 'react';

import { DefaultSvgProps } from '@/types';

export interface Props {
  onPress?: () => void;
  isSwitcher?: boolean;
  onToggleSwitch?: (value: boolean) => void;
  value?: boolean;
  color?: string;
  icon?: FC<DefaultSvgProps>;
}
