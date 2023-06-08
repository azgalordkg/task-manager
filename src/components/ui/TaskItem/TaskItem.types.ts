import { RecurringTypes } from '@/types';

export interface ListItemProps {
  name: string;
  checked: boolean;
  startDate?: number;
  onCheckPress: (id: string, isDone: boolean) => void;
  onDeletePress: (id: string, isQuick?: boolean) => void;
  isLast?: boolean;
  onItemPress: (id: string) => void;
  hasDeadline?: boolean;
  id: string;
  isDone?: boolean;
  repeat?: RecurringTypes;
  labels: number[];
  description?: string;
  priority?: number;
}
