import { RecurringTypes } from '@/types';

export interface ListItemProps {
  name: string;
  checked: boolean;
  startDate?: number;
  endDate?: number;
  onCheckPress: (id: string, isDone: boolean) => void;
  onDeletePress: (id: string, isRecurring: boolean) => void;
  isLast?: boolean;
  onItemPress: (id: string) => void;
  hasDeadline?: boolean;
  id: string;
  isDone?: boolean;
  repeat?: RecurringTypes;
  tags: string[];
  description?: string;
}
