import { FC } from 'react';

import { DefaultSvgProps } from '@/types';

export interface Props {
  onPress?: () => void;
  isSwitcher?: boolean;
  onToggleSwitch?: (value: boolean) => void;
  value?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  color?: string;
  prependIconColor?: string;
  icon?: FC<DefaultSvgProps>;
  prependIcon?: FC<DefaultSvgProps>;
}
