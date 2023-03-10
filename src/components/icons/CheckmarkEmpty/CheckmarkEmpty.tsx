import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants';
import { DefaultSvgProps } from '@/types';

export const CheckmarkEmpty: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE,
  ...props
}) => (
  <Svg
    width={14}
    height={11}
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.49969 10.5012C4.2045 10.5012 3.91048 10.3892 3.68296 10.1675L0.349503 6.9006C-0.110203 6.45022 -0.117204 5.71166 0.333168 5.25079C0.784707 4.78992 1.52444 4.78408 1.98298 5.23329L4.49969 7.701L12.016 0.334032C12.4769 -0.11634 13.2154 -0.111673 13.6658 0.350367C14.1174 0.810073 14.1104 1.5498 13.6506 2.00018L5.31643 10.1675C5.08891 10.3892 4.79489 10.5012 4.49969 10.5012Z"
      fill={color}
    />
  </Svg>
);
