import { Apple, Facebook, Google } from '@/components/icons';
import {
  changePasswordSchema,
  resetPasswordSchema,
  verifyCodeSchema,
} from '@/constants/validation';

export const AUTH_TYPE = [
  { title: 'SIGN_IN', value: 'signIn' },
  { title: 'SIGN_UP', value: 'signUp' },
];

export const AUTH_VARIANTS = [
  { name: 'Google', Icon: Google },
  { name: 'Apple', Icon: Apple },
  { name: 'Facebook', Icon: Facebook },
];

export const resetTitleText = [
  'FORGOT_PASSWORD_TITLE',
  'VERIFY_CODE_TITLE',
  'RESET_PASSWORD_TITLE',
];

export const resetPasswordDescription = [
  'FORGOT_PASSWORD_DESCRIPTION',
  'VERIFY_CODE_DESCRIPTION',
  'CHANGE_PASSWORD_DESCRIPTION',
];

export const resetPasswordButtonText = [
  'SEND_CODE',
  'VERIFY_CODE',
  'RESET_PASSWORD',
];

export const resetPasswordValidationSchemas = [
  resetPasswordSchema,
  verifyCodeSchema,
  changePasswordSchema,
];
