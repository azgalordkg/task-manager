import { themeValue } from '@/context/providers/ThemeProvider/ThemeProvider.types';

export interface Props {
  onPress?: () => void;
  isSwitcher?: boolean;
  isArrow?: boolean;
  isCheckMark?: boolean;
  onToggleSwitch?: (value: boolean) => void;
  switcherValue?: boolean;
  checkMarkValue?: string;
  themeValue?: themeValue;
}
