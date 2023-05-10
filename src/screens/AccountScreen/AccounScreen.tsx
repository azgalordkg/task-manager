import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Message, Profile } from '@/components/icons';
import {
  Input,
  InputButton,
  MenuItem,
  ModalScreenWrapper,
} from '@/components/ui';
import { signUpValidationSchema } from '@/constants/validation';
import { useThemeContext } from '@/context/hooks';
import { selectCurrentUser } from '@/store/apis/auth';
import { AuthFormValues, ScreenProps } from '@/types';

import styles from './AccounScreen.styles';

export const AccountScreen: FC<ScreenProps<'Account'>> = ({ navigation }) => {
  const [isNameFocused, setIsNameFocused] = useState(false);

  const userInfo = useSelector(selectCurrentUser);
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const style = styles(theme);

  const {
    control,
    // handleSubmit,
    setValue,
    watch,
    // formState: { errors, isValid },
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: '',
      password: '',
      fullname: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(signUpValidationSchema),
  });

  const setUserFullname = () => {
    if (userInfo) {
      const { fullname, email } = userInfo;

      if (fullname) {
        setValue('fullname', fullname);
      }
      if (email) {
        setValue('email', email);
      }
    }
  };

  useEffect(() => {
    setUserFullname();
  }, [userInfo]);

  const closeModal = () => {
    navigation.goBack();
  };

  const handleCancelPress = () => {
    setUserFullname();
    setIsNameFocused(false);
  };

  return (
    <ModalScreenWrapper
      cancelText={`${isNameFocused ? t('CANCEL') : t('CLOSE_BUTTON')}`}
      onRequestClose={isNameFocused ? handleCancelPress : closeModal}
      title={t('ACCOUNT')}>
      <View style={style.container}>
        <View style={style.content}>
          <View>
            <Text style={style.label}>{t('FULLNAME')}</Text>
            {isNameFocused ? (
              <Input
                isShowClearIcon
                autoCapitalize="sentences"
                icon={<Profile color={theme.BUTTONS.PRIMARY} />}
                control={control}
                backgroundColor={theme.INPUTS.PRIMARY}
                color={theme.TEXT.PRIMARY}
                autoFocus
                name="fullname"
                placeholder={`${t('FULLNAME')}`}
                maxLength={255}
              />
            ) : (
              <InputButton
                placeholder={`${t('FULLNAME')}`}
                value={watch('fullname')}
                onPress={() => setIsNameFocused(true)}
                name="description"
                control={control}
                icon={<Profile color={theme.BUTTONS.PRIMARY} />}
              />
            )}
          </View>
          <View>
            <Text style={style.label}>{t('EMAIL_ADDRESS')}</Text>
            <MenuItem
              backgroundColor={theme.INPUTS.PRIMARY}
              isLast
              isFirst
              prependIcon={Message}
              onPress={() => {}}>
              {watch('email')}
            </MenuItem>
          </View>
        </View>
      </View>
    </ModalScreenWrapper>
  );
};
