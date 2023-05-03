export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export type AuthFormValuesKey = keyof AuthFormValues;
