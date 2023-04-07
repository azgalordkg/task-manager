import { PropsWithChildren } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
  closeText?: string;
  responsiveHeight?: boolean;
  onBottomButtonPress?: () => void;
}

export type Props = PropsWithChildren<CustomProps>;
