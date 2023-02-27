import { PropsWithChildren } from 'react';

export interface CustomProps {
  onRequestClose: () => void;
}

export type Props = PropsWithChildren<CustomProps>;
