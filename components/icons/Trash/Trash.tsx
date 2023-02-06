import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FC} from 'react';
import {Props} from './Trash.types';

export const Trash: FC<Props> = props => (
  <Svg
    height={512}
    width={512}
    // @ts-ignore TODO solve later
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-name="Layer 1"
    {...props}>
    <Path
      d="M311.252 365.122a11.29 11.29 0 0 0 22.58 0V205.331a11.29 11.29 0 0 0-22.58 0zm-66.542 0a11.29 11.29 0 0 0 22.58 0V205.331a11.29 11.29 0 0 0-22.58 0zm-66.542 0a11.29 11.29 0 0 0 22.58 0V205.331a11.29 11.29 0 0 0-22.58 0zM322.362 93.5a16.928 16.928 0 1 1 0 33.855H189.638a16.928 16.928 0 1 1 0-33.855zm44.591 315.77a9.875 9.875 0 0 1-9.853 9.23H154.9a9.876 9.876 0 0 1-9.853-9.229l-15.992-246.812a9.912 9.912 0 0 1 9.853-10.517h234.185a9.911 9.911 0 0 1 9.852 10.517q-7.995 123.41-15.992 246.811z"
      fill="#fff"
      fillRule="evenodd"
    />
  </Svg>
);
