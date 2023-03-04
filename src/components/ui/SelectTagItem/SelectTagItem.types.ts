export interface Props {
  onPress: () => void;
  onEditPress: () => void;
  checked: boolean;
  color?: string;
  title: string;
  isDefault?: boolean;
}
