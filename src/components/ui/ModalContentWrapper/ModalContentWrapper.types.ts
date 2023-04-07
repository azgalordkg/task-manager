export interface Props {
  onCancelPress?: () => void;
  onDonePress?: () => void;
  cancelText?: string;
  doneText?: string;
  title: string;
}
