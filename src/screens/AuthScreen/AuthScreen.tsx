import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { DismissKeyboard } from '@/components/features';
import {
  Apple,
  Checkbox,
  Facebook,
  Google,
  Lock,
  Message,
} from '@/components/icons';
import { CustomButton, Input } from '@/components/ui';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from '@/constants/validation';
import { useThemeContext } from '@/context/hooks';
import { AuthFormValues, ScreenProps } from '@/types';

import styles from './AuthScreen.styles';

const AUTH_TYPE = [
  { title: 'SIGN_IN', value: 'signIn' },
  { title: 'SIGN_UP', value: 'signUp' },
];

const AUTH_VARIANTS = [
  { name: 'Google', Icon: Google },
  { name: 'Apple', Icon: Apple },
  { name: 'Facebook', Icon: Facebook },
];

export const AuthScreen: FC<ScreenProps<'Auth'>> = ({ navigation }) => {
  const { theme, isDark } = useThemeContext();
  const { t } = useTranslation();

  const [authType, setAuthType] = useState('signIn');

  const isSignIn = authType === 'signIn';

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<AuthFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(
      isSignIn ? signInValidationSchema : signUpValidationSchema,
    ),
  });

  const style = styles(theme);
  const barStyle = isDark ? 'light-content' : 'dark-content';

  const handleAuthTypeChange = (value: string) => {
    setAuthType(value);
    reset();
  };

  const onPressForgotPassword = () => {
    navigation.navigate('ForgotPassword' as never);
  };

  const onPressAuthVariant = (name: string) => {
    console.log(name);
  };

  const onSubmit = (data: AuthFormValues) => {
    console.log(data, 'data');
  };

  return (
    <View style={style.mainWrapper}>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.topView} />

      <DismissKeyboard>
        <View style={style.mainContainer}>
          <View style={style.logoContainer}>
            <Checkbox type="filled" checked color={theme.TEXT.ACCENT} />

            <Text style={style.logoText}>Task Ninja</Text>
          </View>

          <Text style={style.authTitle}>{t('ABOUT_US_TITLE')}</Text>

          <View style={style.formWrapper}>
            <View style={style.authSwitch}>
              {AUTH_TYPE.map(({ title, value }) => {
                const isActive = authType === value;
                const titleLength = t(title).length;

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
                        titleLength >= 18 && style.authSwitchSmallText,
                      ]}>
                      {t(title)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={style.formContainer}>
              <Input
                icon={<Message color={theme.TEXT.ACCENT} />}
                backgroundColor={theme.BACKGROUND.NEUTRAL}
                color={theme.TEXT.PRIMARY}
                control={control}
                name="email"
                placeholder={`${t('EMAIL_ADDRESS')}`}
                errorMessage={errors.email?.message}
              />

              <Input
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
                  <Text style={style.forgotPassword}>
                    {t('FORGOT_PASSWORD')}
                  </Text>
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

            <CustomButton
              bgColor={theme.BUTTONS.PRIMARY}
              disabled={!isValid}
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
                    activeOpacity={1}
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
      </DismissKeyboard>
    </View>
  );
};
