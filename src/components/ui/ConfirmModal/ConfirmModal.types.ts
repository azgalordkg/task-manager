export interface Props {
  visible: boolean;
  title: string;
  description: string;
  confirmButtonLabel?: string;
  dismissButtonLabel?: string;
  onPressConfirm: () => void;
  onPressDismiss: () => void;
}
