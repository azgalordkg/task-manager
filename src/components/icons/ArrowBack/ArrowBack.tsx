import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants';
import { DefaultSvgProps } from '@/types';

export const ArrowBack: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE,
  ...props
}) => (
  <Svg
    width={32}
    height={28}
    viewBox="0 0 39 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M36.7496 12.7715H5.97413L15.2369 3.50875C15.404 3.34732 15.5373 3.15422 15.6291 2.94071C15.7208 2.72721 15.769 2.49757 15.7711 2.26521C15.7731 2.03284 15.7288 1.8024 15.6408 1.58733C15.5528 1.37227 15.4229 1.17687 15.2586 1.01256C15.0943 0.848251 14.8989 0.718308 14.6838 0.630316C14.4687 0.542325 14.2383 0.498047 14.0059 0.500066C13.7736 0.502085 13.5439 0.550361 13.3304 0.642077C13.1169 0.733793 12.9238 0.867112 12.7624 1.03425L0.512376 13.2843C0.184302 13.6124 0 14.0575 0 14.5215C0 14.9855 0.184302 15.4306 0.512376 15.7588L12.7624 28.0088C13.0924 28.3275 13.5345 28.5039 13.9933 28.4999C14.4522 28.4959 14.8911 28.3119 15.2156 27.9874C15.54 27.663 15.7241 27.2241 15.7281 26.7652C15.732 26.3064 15.5557 25.8643 15.2369 25.5343L5.97413 16.2715H36.7496C37.2138 16.2715 37.6589 16.0871 37.9871 15.7589C38.3153 15.4308 38.4996 14.9856 38.4996 14.5215C38.4996 14.0574 38.3153 13.6123 37.9871 13.2841C37.6589 12.9559 37.2138 12.7715 36.7496 12.7715Z"
      fill={color}
    />
  </Svg>
);
