import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { DefaultSvgProps } from '@/types';

export const Pencil: FC<DefaultSvgProps> = ({ color, ...props }) => {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.7104 18.0521C2.49029 18.2735 2.34715 18.5598 2.30207 18.8687L0.931237 28.4208C0.897421 28.645 0.916718 28.874 0.987574 29.0894C1.05843 29.3047 1.17887 29.5005 1.33919 29.6608C1.4995 29.8211 1.69523 29.9415 1.9106 30.0124C2.12597 30.0833 2.35496 30.1026 2.57915 30.0687L12.1312 28.6979C12.4402 28.6528 12.7265 28.5097 12.9479 28.2896L24.2062 17.0458L13.9542 6.80832L2.7104 18.0521Z"
        fill={color}
      />
      <Path
        d="M17.7167 3.04583L16.025 4.7375L26.2625 14.975L27.9688 13.2833C34.7251 6.49187 24.4778 -3.71529 17.7167 3.04583Z"
        fill={color}
      />
    </Svg>
  );
};
