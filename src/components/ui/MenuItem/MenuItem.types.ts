export interface Props {
  onPress?: () => void;
  isSwitcher?: boolean;
  onToggleSwitch?: (value: boolean) => void;
  value?: boolean;
}
