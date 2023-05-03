export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export type AuthFormValuesKey = keyof AuthFormValues;

export interface ResetPasswordFormValues {
  email?: string;
  code?: string;
  password?: string;
  confirmPassword?: string;
}

export type ResetPasswordFormValuesKey = keyof ResetPasswordFormValues;
