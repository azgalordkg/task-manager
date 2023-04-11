import { PropsWithChildren, ReactNode } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
  closeText?: string;
  responsiveHeight?: boolean;
  onBottomButtonPress?: () => void;
  onCancelPress?: () => void;
  onDonePress?: () => void;
  isDoneDisabled?: boolean;
  cancelText?: string;
  doneText?: string;
  title: string;
  rightActionComponent?: ReactNode;
}

export type Props = PropsWithChildren<CustomProps>;
