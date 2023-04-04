import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { Checkbox } from '@/components/icons';
import { CustomButton, Input } from '@/components/ui';
import { COLORS } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import { useTaskModalContext, useThemeContext } from '@/context/hooks';
import { createTask } from '@/services';
import { CreateTaskData } from '@/types';
import { roundAndExtendTimeRange, vibrate } from '@/utils';

import styles from './QuickTaskForm.styles';
import { Props } from './QuickTaskForm.types';

export const QuickTaskForm: FC<Props> = ({ date, handleShowInput }) => {
  const createDateTime = new Date();
  const { t } = useTranslation();

  const combineStartDate = (dateDay: Date, dateTime: Date) => {
    const day = moment(dateDay);
    const time = moment(dateTime);

    return moment({
      year: day.year(),
      month: day.month(),
      day: day.date(),
      hour: time.hour(),
      minute: time.minute(),
      second: time.second(),
    });
  };

  const { startDate, endDate } = roundAndExtendTimeRange(
    combineStartDate(new Date(+date), createDateTime),
  );

  const { fetchList } = useTaskModalContext();
  const { theme } = useThemeContext();
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
      endDate,
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
    <View style={style.contentWrapper}>
      <DismissKeyboard>
        <View style={style.container}>
          <Checkbox width={28} height={28} color={theme.TEXT_INFO} />

          <View style={style.inputContainer}>
            <Input
              control={control}
              name="name"
              placeholder={`${t('NAME_INPUT_PLACEHOLDER')}`}
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
                {t('CANCEL_BUTTON')}
              </CustomButton>

              <CustomButton width="48%" onPress={handleSubmit(onSubmit)}>
                {t('CREATE_BUTTON')}
              </CustomButton>
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </View>
  );
};
