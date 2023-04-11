export interface Props {
  onPress: () => void;
  checked: boolean;
  checkedColor?: string;
  defaultColor?: string;
  size?: number;
  type?: 'filled' | 'outline';
  checkmarkColor?: string;
}
