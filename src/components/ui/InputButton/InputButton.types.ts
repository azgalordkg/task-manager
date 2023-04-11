import { Control } from 'react-hook-form/dist/types';
import { TextInputProps } from 'react-native';

import { CreateTaskData, CreateTaskKey } from '@/types';

export interface Props extends TextInputProps {
  onPress: () => void;
  name: CreateTaskKey;
  control: Control<CreateTaskData>;
  icon: JSX.Element;
}
