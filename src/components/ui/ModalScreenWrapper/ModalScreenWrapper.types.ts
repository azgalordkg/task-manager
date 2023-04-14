import { PropsWithChildren, ReactNode } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
  responsiveHeight?: boolean;
  onCancelPress?: () => void;
  onDonePress?: () => void;
  isDoneDisabled?: boolean;
  cancelText?: string;
  doneText?: string;
  contentBackgroundColor?: string;
  title: string;
  rightActionComponent?: ReactNode;
}

export type Props = PropsWithChildren<CustomProps>;
