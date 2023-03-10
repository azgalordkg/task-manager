import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { Props } from './Checkmark.types';

export const Checkmark: FC<Props> = ({ color, height, width, ...props }) => (
  <Svg
    width={width || 16}
    height={height || 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.14251 14.2513C4.80514 14.2513 4.46912 14.1313 4.20909 13.8938L0.399432 10.3935C-0.125947 9.91096 -0.133947 9.11964 0.380764 8.62585C0.896808 8.13205 1.74221 8.1258 2.26626 8.60709L5.14251 11.2511L13.7326 3.35789C14.2593 2.87535 15.1034 2.88035 15.6181 3.37539C16.1341 3.86794 16.1261 4.6605 15.6007 5.14304L6.07592 13.8938C5.8159 14.1313 5.47987 14.2513 5.14251 14.2513Z"
      fill={color}
    />
  </Svg>
);
