import { FieldValues } from 'react-hook-form';

export interface Props {
  onSubmit: (data: FieldValues) => void;
  onAddPress: () => void;
  onClose: () => void;
  editItemId?: string;
}
