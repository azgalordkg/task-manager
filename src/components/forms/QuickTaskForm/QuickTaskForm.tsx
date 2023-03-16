import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { Checkbox } from '@/components/icons';
import { CustomButton, Input } from '@/components/ui';
import { COLORS } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import { useTaskModalContext, useThemeContext } from '@/context/hooks';
import { createTask } from '@/services';
import { CreateTaskData } from '@/types';
import { vibrate } from '@/utils';

import styles from './QuickTaskForm.styles';
import { Props } from './QuickTaskForm.types';

export const QuickTaskForm: FC<Props> = ({ date, handleShowInput }) => {
  const { fetchList } = useTaskModalContext();
  const { theme, activeTheme } = useThemeContext();
  const iconColor = activeTheme === 'light' ? COLORS.GREY : COLORS.GREY_MEDIUM;
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
      startDate: new Date(+date),
      endDate: new Date(),
      repeat: 'Never',
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
        <Checkbox width={28} height={28} color={iconColor} />

        <View style={style.inputContainer}>
          <Input
            control={control}
            name="name"
            placeholder="Name *"
            errorMessage={errors.name?.message}
            borderColor={theme.INPUT_QUICK_TASK}
            backgroundColor={theme.INPUT_QUICK_TASK}
            maxLength={30}
            color={theme.TEXT_PRIMARY}
          />

          <View style={style.buttonWrapper}>
            <CustomButton
              width="48%"
              bgColor={theme.INPUT_QUICK_TASK}
              textColor={COLORS.RED}
              onPress={handleShowInput}>
              Cancel
            </CustomButton>

            <CustomButton width="48%" onPress={handleSubmit(onSubmit)}>
              Create
            </CustomButton>
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};
