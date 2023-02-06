import {Control} from 'react-hook-form/dist/types';
import {TextInputProps} from 'react-native';

export interface Props extends TextInputProps {
  control: Control;
  defaultValue?: string;
  name: string;
}
