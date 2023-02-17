import { ScreenProps } from '@/types';

export interface Props extends Partial<ScreenProps<'Home'>> {
  withHeader?: boolean;
}
