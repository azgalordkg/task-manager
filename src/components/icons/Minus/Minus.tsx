import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants';
import { DefaultSvgProps } from '@/types';

export const Minus: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE_LIGHT,
  ...props
}) => (
  <Svg
    width={14}
    height={4}
    viewBox="0 0 14 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.7695 0.769471H8.23047C7.44922 0.76954 7.67957 0.769524 7 0.769524C6.32043 0.769524 6.40234 0.769462 5.76953 0.769409L1.23047 0.769471C0.550894 0.769471 0 1.32037 0 1.99994C0 2.67951 0.550894 3.23041 1.23047 3.23041H5.76953H6C6.31406 3.23041 6.32043 3.23041 7 3.23041C7.67957 3.23041 7.53766 3.23041 8.23047 3.23041H12.7695C13.4491 3.23041 14 2.67951 14 1.99994C14 1.32037 13.4491 0.769471 12.7695 0.769471Z"
      fill={color}
    />
  </Svg>
);
