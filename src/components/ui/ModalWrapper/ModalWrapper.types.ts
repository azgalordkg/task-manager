import { PropsWithChildren } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
  closeText?: string;
  responsiveHeight?: boolean;
  onBottomButtonPress?: () => void;
  onCancelPress?: () => void;
  onDonePress?: () => void;
  cancelText?: string;
  doneText?: string;
  title: string;
}

export type Props = PropsWithChildren<CustomProps>;
