import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FC} from 'react';
import {Props} from './Calendar.types';
import {COLORS} from '../../../constants';

export const Calendar: FC<Props> = ({color = COLORS.BG, ...props}) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 484 452"
    {...props}>
    <Path
      d="M430.741.118h-45.176v45.176c0 9.035-7.53 15.059-15.059 15.059-7.53 0-15.059-6.024-15.059-15.059V.118H114.506v45.176c0 9.035-7.53 15.059-15.059 15.059-7.53 0-15.059-6.024-15.059-15.059V.118H39.212C16.623.118.059 19.694.059 45.294v54.212H481.94V45.294c0-25.6-27.106-45.176-51.2-45.176zM.059 131.129v275.577c0 27.106 16.564 45.176 40.659 45.176h391.529c24.094 0 51.2-19.576 51.2-45.176V131.129H.059zm134.023 252.989h-36.14c-6.024 0-12.048-4.518-12.048-12.047v-37.647c0-6.024 4.518-12.048 12.047-12.048h37.647c6.024 0 12.047 4.518 12.047 12.048v37.647c-1.506 7.529-6.023 12.047-13.553 12.047zm0-135.53h-36.14c-6.024 0-12.048-4.517-12.048-12.047v-37.647c0-6.023 4.518-12.047 12.047-12.047h37.647c6.024 0 12.047 4.518 12.047 12.047v37.647c-1.506 7.53-6.023 12.047-13.553 12.047zm120.471 135.53h-37.647c-6.024 0-12.047-4.518-12.047-12.047v-37.647c0-6.024 4.517-12.048 12.047-12.048h37.647c6.023 0 12.047 4.518 12.047 12.048v37.647c0 7.529-4.518 12.047-12.047 12.047zm0-135.53h-37.647c-6.024 0-12.047-4.517-12.047-12.047v-37.647c0-6.023 4.517-12.047 12.047-12.047h37.647c6.023 0 12.047 4.518 12.047 12.047v37.647c0 7.53-4.518 12.047-12.047 12.047zm120.471 135.53h-37.648c-6.023 0-12.047-4.518-12.047-12.047v-37.647c0-6.024 4.518-12.048 12.047-12.048h37.648c6.023 0 12.047 4.518 12.047 12.048v37.647c0 7.529-4.518 12.047-12.047 12.047zm0-135.53h-37.648c-6.023 0-12.047-4.517-12.047-12.047v-37.647c0-6.023 4.518-12.047 12.047-12.047h37.648c6.023 0 12.047 4.518 12.047 12.047v37.647c0 7.53-4.518 12.047-12.047 12.047z"
      fill={color}
    />
  </Svg>
);
