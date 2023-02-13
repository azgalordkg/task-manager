export interface Props {
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  type?: 'filled' | 'outlined' | 'clean';
  height?: number;
  fullWidth?: boolean;
  width?: number | string;
  padding?: number;
  fontSize?: number;
  borderWidth?: number;
  disabled?: boolean;
}