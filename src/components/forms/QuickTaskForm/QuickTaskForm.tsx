import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { Checkbox } from '@/components/icons';
import { CustomButton, Input } from '@/components/ui';
import { COLORS } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import { useTaskModalContext } from '@/context/hooks';
import { createTask } from '@/services';
import { CreateTaskData } from '@/types';
import { vibrate } from '@/utils';

import styles from './QuickTaskForm.styles';
import { Props } from './QuickTaskForm.types';

export const QuickTaskForm: FC<Props> = ({ date, handleShowInput }) => {
  const { fetchList } = useTaskModalContext();

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
      <View style={styles.container}>
        <Checkbox width={32} height={32} color={COLORS.GREY_MEDIUM} />

        <View style={styles.inputContainer}>
          <Input
            control={control}
            name="name"
            placeholder="Name *"
            errorMessage={errors.name?.message}
            borderColor={COLORS.GREY_MEDIUM}
            backgroundColor={COLORS.GREY_MEDIUM}
            maxLength={30}
            color={COLORS.WHITE_LIGHT}
          />

          <View style={styles.buttonWrapper}>
            <CustomButton
              width="48%"
              bgColor={COLORS.GREY_MEDIUM}
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
