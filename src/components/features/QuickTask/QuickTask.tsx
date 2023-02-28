import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { Checkmark, Plus } from '@/components/icons';
import { CustomButton, Input } from '@/components/ui';
import { COLORS, createTaskFormSchema } from '@/constants';
import { useTaskModalContext } from '@/context/hooks';
import { createTask } from '@/services';
import { CreateTaskData } from '@/types';

import styles from './QuickTask.styles';
import { Props } from './QuickTask.types';

export const QuickTask: FC<Props> = ({ date }) => {
  const [showInput, setShowInput] = useState(false);
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

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const onSubmit = (data: FieldValues) => {
    createTask({
      ...data,
      startDate: new Date(+date),
      endDate: new Date(),
      repeat: 'Never',
      hasDeadline: false,
      description: '',
    } as CreateTaskData);

    fetchList();
    handleShowInput();
    reset();
  };

  return (
    <>
      {showInput ? (
        <DismissKeyboard>
          <View style={styles.container}>
            <Checkmark
              width={32}
              height={32}
              color={COLORS.QUICK_TASK_BUTTON}
            />

            <View style={styles.inputContainer}>
              <Input
                control={control}
                name="name"
                placeholder="Name *"
                errorMessage={errors.name?.message}
                borderColor={COLORS.QUICK_TASK_BUTTON}
                backgroundColor={COLORS.QUICK_TASK_BUTTON}
                maxLength={30}
                textColor={COLORS.WHITE}
              />

              <View style={styles.buttonWrapper}>
                <CustomButton
                  width="48%"
                  bgColor={COLORS.QUICK_TASK_BUTTON}
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
      ) : (
        <View style={styles.buttonWrapper}>
          <CustomButton
            bgColor={COLORS.QUICK_TASK_BUTTON}
            onPress={handleShowInput}
            width="100%"
            icon={Plus}>
            Add quick task
          </CustomButton>
        </View>
      )}
    </>
  );
};
