import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import { CreateTaskKey } from '@/types';

export interface Props extends TextInputProps {
  onPress: () => void;
  name: CreateTaskKey;
  control: Control<any>;
  icon: JSX.Element;
}
