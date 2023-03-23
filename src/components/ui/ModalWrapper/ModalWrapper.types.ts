import { PropsWithChildren } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
  closeText?: string;
  responsiveHeight?: boolean;
}

export type Props = PropsWithChildren<CustomProps>;
