import React, { FC } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { Props } from './Select.types';

export const Select: FC<Props> = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
    />
  );
};
