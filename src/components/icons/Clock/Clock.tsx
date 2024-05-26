import * as React from 'react';
import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { COLORS } from '@/constants';
import { DefaultSvgProps } from '@/types';

export const Clock: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE,
  ...props
}) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_190_582)">
      <Path
        d="M10 20C15.5214 20 20 15.5214 20 10C20 4.47856 15.5214 0 10 0C4.47856 0 0 4.47856 0 10C0 15.5214 4.47856 20 10 20ZM9.28569 4.28572C9.28569 3.89285 9.60713 3.57142 10 3.57142C10.3929 3.57142 10.7143 3.89285 10.7143 4.28572V9.65715L14.0179 12.3C14.325 12.5464 14.375 12.9964 14.1286 13.3036C13.9893 13.4786 13.7822 13.5714 13.5714 13.5714C13.4143 13.5714 13.2571 13.5214 13.125 13.4143L9.55359 10.5572C9.38574 10.4214 9.28575 10.2179 9.28575 10V4.28572H9.28569Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_190_582">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);