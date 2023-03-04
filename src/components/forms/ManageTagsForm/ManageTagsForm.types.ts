export interface Props {
  onClose: () => void;
  onCreateTagPress: () => void;
  onEditTagPress: (id: string) => void;
  isSettings?: boolean;
}
