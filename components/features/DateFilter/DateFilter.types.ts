import {CreateTaskKey} from '../../../types';

export interface Props {
  currentStartDate: Date;
  currentEndDate: Date;
  onPressHandler: (name: CreateTaskKey, day: Date) => void;
}
