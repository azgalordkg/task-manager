import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { CustomButton, Input } from '@/components/ui';
import { createTaskFormSchema } from '@/constants/validation';
import { useTaskModalContext, useThemeContext } from '@/context/hooks';
import { createTask } from '@/services';
import { CreateTaskData } from '@/types';
import { roundAndExtendTimeRange, vibrate } from '@/utils';

import styles from './QuickTaskForm.styles';
import { Props } from './QuickTaskForm.types';

export const QuickTaskForm: FC<Props> = ({ handleShowInput }) => {
  const { t } = useTranslation();
  const { fetchList, targetDate } = useTaskModalContext();
  const { theme } = useThemeContext();

  const startDate = roundAndExtendTimeRange(moment(targetDate));
  const style = styles(theme);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskData>({
    mode: 'onSubmit',
    resolver: yupResolver(createTaskFormSchema),
  });

  const onSubmit = (data: FieldValues) => {
    createTask({
      ...data,
      startDate,
      repeat: 'Never',
      priority: 4,
      hasDeadline: false,
      description: '',
    } as CreateTaskData);

    vibrate('impactHeavy');
    fetchList();
    handleShowInput();
    reset();
  };

  return (
    <DismissKeyboard>
      <View style={style.container}>
        <View style={style.inputContainer}>
          <Input
            borderRadius={8}
            control={control}
            name="name"
            placeholder={`${t('NAME_INPUT_PLACEHOLDER')}`}
            errorMessage={errors.name?.message}
            borderColor={theme.BACKGROUND.INPUT}
            backgroundColor={theme.BACKGROUND.INPUT}
            maxLength={30}
            color={theme.TEXT.PRIMARY}
          />

          <View style={style.buttonWrapper}>
            <CustomButton
              borderRadius={8}
              width="48%"
              height={32}
              fontSize={16}
              bgColor={theme.BUTTONS.SECONDARY}
              textColor={theme.BUTTONS.TEXT}
              onPress={handleShowInput}>
              {t('CANCEL_BUTTON')}
            </CustomButton>

            <CustomButton
              borderRadius={8}
              height={32}
              fontSize={16}
              width="48%"
              onPress={handleSubmit(onSubmit)}>
              {t('CREATE_BUTTON')}
            </CustomButton>
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};
