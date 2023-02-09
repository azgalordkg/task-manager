import { PropsWithChildren } from 'react';

export interface CustomProps {
  visible: boolean;
  onRequestClose: () => void;
}

export type Props = PropsWithChildren<CustomProps>;
