import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants';
import { DefaultSvgProps } from '@/types';

export const ArrowAngle: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE_LIGHT,
  ...props
}) => (
  <Svg
    width={10}
    height={15}
    viewBox="0 0 10 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.46798 0.00025829C1.24628 -0.00461778 1.02858 0.059649 0.845125 0.184223C0.661674 0.308796 0.521594 0.48752 0.444361 0.695385C0.367129 0.903251 0.356581 1.12998 0.414183 1.34412C0.471786 1.55826 0.594677 1.74904 0.765772 1.89011L7.294 7.48275L0.765772 13.0734C0.647417 13.1604 0.548298 13.2708 0.474622 13.3979C0.400945 13.525 0.354299 13.6659 0.337603 13.8119C0.320908 13.9578 0.334523 14.1056 0.377597 14.246C0.42067 14.3864 0.492273 14.5165 0.587923 14.628C0.683572 14.7394 0.801208 14.8298 0.933462 14.8937C1.06572 14.9577 1.20974 14.9935 1.35651 14.9992C1.50329 15.0049 1.64965 14.9802 1.78643 14.9267C1.92322 14.8732 2.04748 14.792 2.15143 14.6882L9.62566 8.2933C9.74304 8.19314 9.83729 8.06881 9.90192 7.92869C9.96655 7.78858 10 7.63607 10 7.48177C10 7.32746 9.96655 7.17495 9.90192 7.03484C9.83729 6.89472 9.74304 6.77027 9.62566 6.67011L2.15143 0.269006C1.96262 0.101299 1.72045 0.0061999 1.46798 0.00025829Z"
      fill={color}
    />
  </Svg>
);
