import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';

import { Checkbox, Lock, Message } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { CustomButton, ErrorMessage, Input } from '@/components/ui';
import { AUTH_TYPE, AUTH_VARIANTS, TOKEN } from '@/constants';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from '@/constants/validation';
import { useThemeContext } from '@/context/hooks';
import {
  useLazyGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
} from '@/store/apis/auth';
import { AuthFormValues, ScreenProps, ServerError } from '@/types';
import { Storage } from '@/utils';

import styles from './AuthScreen.styles';

export const AuthScreen: FC<ScreenProps<'Auth'>> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  const [
    login,
    { data: loginData, isLoading: isLoginLoading, error: loginError },
  ] = useLoginMutation();
  const [
    register,
    { data: registerData, isLoading: isRegisterLoading, error: registerError },
  ] = useRegisterMutation();
  const [getMe, { isLoading: isMeLoading, error: meError }] =
    useLazyGetMeQuery();

  const [authType, setAuthType] = useState('signIn');

  const isSignIn = authType === 'signIn';

  const setToken = async () => {
    if (loginData || registerData) {
      await Storage.storeData(TOKEN, loginData?.token || registerData?.token);
      getMe();
    }
  };

  useEffect(() => {
    void setToken();
  }, [loginData, registerData]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(
      isSignIn ? signInValidationSchema : signUpValidationSchema,
    ),
  });

  const style = styles(theme);

  const handleAuthTypeChange = (value: string) => {
    setAuthType(value);
    reset();
  };

  const onPressForgotPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const onPressAuthVariant = (name: string) => {
    console.log(name);
  };

  const onSubmit = async ({ email, password }: AuthFormValues) => {
    if (isSignIn) {
      await login({ email, password });
    } else {
      await register({ email, password });
    }
  };

  const authErrorMessage =
    (loginError as ServerError)?.data?.message ||
    (registerError as ServerError)?.data?.message ||
    (meError as ServerError)?.data?.message ||
    'SOMETHING_WENT_WRONG';

  return (
    <MainLayout topViewBackgroundColor={theme.BACKGROUND.SECONDARY}>
      <View style={style.mainWrapper}>
        <View style={style.logoContainer}>
          <Checkbox type="filled" checked color={theme.TEXT.ACCENT} />

          <Text style={style.logoText}>Task Ninja</Text>
        </View>

        <Text style={style.authTitle}>{t('ABOUT_US_TITLE')}</Text>

        <View style={style.formWrapper}>
          <View style={style.authSwitch}>
            {AUTH_TYPE.map(({ title, value }) => {
              const isActive = authType === value;
              const authTitle = t(title);

              return (
                <TouchableOpacity
                  key={value}
                  style={[
                    style.switchItem,
                    isActive && style.authSwitchItemActive,
                  ]}
                  onPress={() => handleAuthTypeChange(value)}>
                  <Text
                    style={[
                      style.authSwitchText,
                      authTitle.length >= 18 && style.authSwitchSmallText,
                    ]}>
                    {authTitle}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={style.formContainer}>
            <Input
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Message color={theme.TEXT.ACCENT} />}
              backgroundColor={theme.BACKGROUND.NEUTRAL}
              color={theme.TEXT.PRIMARY}
              control={control}
              name="email"
              placeholder={`${t('EMAIL_ADDRESS')}`}
              errorMessage={errors.email?.message}
            />

            <Input
              textContentType="password"
              autoCapitalize="none"
              icon={<Lock color={theme.TEXT.ACCENT} />}
              backgroundColor={theme.BACKGROUND.NEUTRAL}
              color={theme.TEXT.PRIMARY}
              control={control}
              isSecureInput
              name="password"
              placeholder={`${t('PASSWORD')}`}
              errorMessage={errors.password?.message}
            />

            {isSignIn && (
              <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={style.forgotPassword}>{t('FORGOT_PASSWORD')}</Text>
              </TouchableOpacity>
            )}

            {!isSignIn && (
              <Input
                icon={<Lock color={theme.TEXT.ACCENT} />}
                backgroundColor={theme.BACKGROUND.NEUTRAL}
                color={theme.TEXT.PRIMARY}
                control={control}
                isSecureInput
                name="confirmPassword"
                placeholder={`${t('CONFIRM_PASSWORD')}`}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          </View>

          {(loginError || registerError || meError) && (
            <View style={style.errorWrapper}>
              <ErrorMessage size="medium">{t(authErrorMessage)}</ErrorMessage>
            </View>
          )}
          <CustomButton
            isLoading={isLoginLoading || isRegisterLoading || isMeLoading}
            bgColor={theme.BUTTONS.PRIMARY}
            disabled={
              !isValid || isLoginLoading || isRegisterLoading || isMeLoading
            }
            onPress={handleSubmit(onSubmit)}>
            {t('CONTINUE')}
          </CustomButton>

          <View style={style.continueContainer}>
            <View style={style.divider} />
            <Text style={style.continueTitle}>{t('CONTINUE_WITH')}</Text>
            <View style={style.divider} />
          </View>

          <View style={style.authVariantContainer}>
            {AUTH_VARIANTS.map(({ name, Icon }) => {
              return (
                <TouchableOpacity
                  key={name}
                  activeOpacity={0.75}
                  style={style.authVariantItem}
                  onPress={() => onPressAuthVariant(name)}>
                  <Icon />

                  <Text style={style.authVariantTitle}>{name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
