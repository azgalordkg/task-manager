export interface Props {
  onPress: () => void;
  onEditPress: () => void;
  checked: boolean;
  color?: string;
  isSettings?: boolean;
  title: string;
  isDefault?: boolean;
}
