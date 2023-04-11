export interface Props {
  onCreateTagPress: () => void;
  onEditTagPress: (id: string) => void;
  isSettings?: boolean;
}
