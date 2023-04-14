export interface Props {
  visible: boolean;
  onPressDismiss: () => void;
  onDateChange: (date: Date) => void;
  selectedMonth: string;
}
