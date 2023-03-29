import { ScreenProps } from '@/types';

export interface Props extends Partial<ScreenProps<'Home'>> {
  withHeader?: boolean;
  onBack?: () => void;
  screenTitle?: string;
  tasksTotal?: number;
  tasksCurrent?: number;
}
