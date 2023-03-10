import * as React from 'react';
import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { COLORS } from '@/constants';

import { Props } from './Checkbox.types';

export const Checkbox: FC<Props> = ({ color, checked, ...props }) => (
  <Svg
    width={512}
    height={512}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}>
    <G clipPath="url(#a)" fill={color || COLORS.WHITE_LIGHT}>
      <Path d="M384 42.667c47.061 0 85.333 38.272 85.333 85.333v256c0 47.061-38.272 85.333-85.333 85.333H128c-47.061 0-85.333-38.272-85.333-85.333V128c0-47.061 38.272-85.333 85.333-85.333h256ZM384 0H128C57.301 0 0 57.301 0 128v256c0 70.699 57.301 128 128 128h256c70.699 0 128-57.301 128-128V128C512 57.301 454.699 0 384 0Z" />
      {checked && (
        <Path d="M212.416 362.667c-5.397 0-10.773-2.048-14.933-6.102l-60.95-59.733c-8.405-8.235-8.533-21.739-.298-30.165 8.256-8.427 21.781-8.534 30.165-.32l46.016 45.12 137.429-134.699c8.427-8.235 21.931-8.149 30.166.299 8.256 8.405 8.128 21.93-.278 30.165L227.349 356.565c-4.16 4.054-9.536 6.102-14.933 6.102Z" />
      )}
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h512v512H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
