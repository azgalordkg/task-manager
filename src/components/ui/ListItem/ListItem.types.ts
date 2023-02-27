export interface ListItemProps {
  name: string;
  checked: boolean;
  startDate?: number;
  endDate?: number;
  onCheckPress: (id: string, isDone: boolean) => void;
  onDeletePress: (id: string) => void;
  isLast?: boolean;
  onItemPress: (id: string) => void;
  onEditPress: (id: string) => void;
  hasDeadline?: boolean;
  id: string;
  isDone?: boolean;
}
