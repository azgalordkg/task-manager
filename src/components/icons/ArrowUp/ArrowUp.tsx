import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants';
import { DefaultSvgProps } from '@/types';

export const ArrowUp: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE,
  ...props
}) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.7589 16.2541C19.4667 16.5522 19.0095 16.5793 18.6873 16.3354L18.595 16.2541L12 9.52658L5.40503 16.2541C5.11283 16.5522 4.65558 16.5793 4.33338 16.3354L4.24106 16.2541C3.94887 15.956 3.9223 15.4896 4.16137 15.161L4.24106 15.0668L11.418 7.7459C11.7102 7.44784 12.1675 7.42074 12.4897 7.66461L12.582 7.7459L19.7589 15.0668C20.0804 15.3947 20.0804 15.9262 19.7589 16.2541Z"
      fill={color}
    />
  </Svg>
);
