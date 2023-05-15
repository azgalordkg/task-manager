export interface CreateTagData {
  name: string;
  color: string;
  isDefault?: boolean;
}

export interface UpdateTagData extends Partial<CreateTagData> {
  _id: string;
}

export interface TagsResponseItem extends CreateTagData {
  id: number;
}
