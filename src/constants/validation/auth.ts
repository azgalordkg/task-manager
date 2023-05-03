import { t } from 'i18next';
import * as yup from 'yup';

const emailSchema = yup
  .string()
  .email(`${t('INVALID_EMAIL')}`)
  .min(6, `${t('EMAIL_TOO_SHORT')}`)
  .max(18, `${t('EMAIL_TOO_LONG')}`)
  .required(`${t('EMAIL_REQUIRED')}`);

const passwordSchema = yup
  .string()
  .min(6, `${t('PASSWORD_TOO_SHORT')}`)
  .max(18, `${t('PASSWORD_TOO_LONG')}`)
  .required(`${t('PASSWORD_REQUIRED')}`);

const confirmPassword = yup
  .string()
  .oneOf([yup.ref('password')], `${t('PASSWORDS_MUST_MATCH')}`)
  .required(`${t('CONFIRM_PASSWORD_REQUIRED')}`);

export const signInValidationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpValidationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPassword,
});

export const resetPasswordSchema = yup.object().shape({
  email: emailSchema,
});

// temporary min & max code length
export const verifyCodeSchema = yup.object().shape({
  code: yup
    .string()
    .min(6, `${t('CODE_TOO_SHORT')}`)
    .max(18, `${t('CODE_TOO_LONG')}`)
    .required(`${t('CODE_REQUIRED')}`),
});

export const changePasswordSchema = yup.object().shape({
  password: passwordSchema,
  confirmPassword: confirmPassword,
});
