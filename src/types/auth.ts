export interface AuthData {
  email: string;
  password: string;
}

export interface AuthFormValues extends AuthData {
  confirmPassword?: string;
}

export type AuthFormValuesKey = keyof AuthFormValues;

export interface ResetPasswordFormValues extends Partial<AuthData> {
  code?: string;
  confirmPassword?: string;
}

export type ResetPasswordFormValuesKey = keyof ResetPasswordFormValues;

export interface Role {
  id: number;
  value: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserInfo {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  roles: Role[];
  tasks: any[]; // TODO Implement Task type
}
