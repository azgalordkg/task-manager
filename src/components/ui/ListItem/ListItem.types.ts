export interface ListItemProps {
  name: string;
  checked: boolean;
  startDate?: number;
  endDate?: number;
  onCheckPress: () => void;
  onDeletePress: () => void;
  isLast?: boolean;
  onItemPress: () => void;
}
