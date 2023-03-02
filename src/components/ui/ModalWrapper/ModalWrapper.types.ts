import { PropsWithChildren } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
  closeText?: string;
}

export type Props = PropsWithChildren<CustomProps>;
