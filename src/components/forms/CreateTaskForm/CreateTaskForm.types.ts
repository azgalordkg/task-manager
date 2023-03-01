import { FieldValues } from 'react-hook-form';

export interface Props {
  onSubmit: (data: FieldValues) => void;
  editItemId?: string;
}
