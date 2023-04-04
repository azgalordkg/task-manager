import { ScreenProps } from '@/types';

export interface Props extends Partial<ScreenProps<'Home'>> {
  screenTitle: any;
  onBack: any;
  isFilter?: boolean;
  isSettings?: boolean;
}
