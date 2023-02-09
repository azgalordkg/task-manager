import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { COLORS } from '@/constants';
import { CreateTaskData } from '@/types';

import { BrakeLine, CustomButton, CustomDatePicker, Input } from '../../ui';
import DateFilter from '../DateFilter/DateFilter';
import { DismissKeyboard } from '../DismissKeyboard';
import styles from './CreateTaskForm.styles';
import { Props } from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({ onSubmit }) => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setMinutes(startDate.getMinutes() < 30 ? 0 : 30);
  endDate.setHours(
    startDate.getHours() + 1,
    startDate.getMinutes() < 30 ? 0 : 30,
  );

  const { control, handleSubmit, setValue, watch } = useForm<CreateTaskData>({
    defaultValues: {
      startDate,
      endDate,
    },
  });

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Create task</Text>
        </View>
        <BrakeLine isDark />
        <View style={styles.fieldsWrapper}>
          <View style={styles.inputWrapper}>
            <Input control={control} name="name" placeholder="Name *" />
          </View>
          <View style={styles.inputWrapper}>
            <Input
              control={control}
              multiline={true}
              numberOfLines={4}
              name="description"
              placeholder="Description (optional)"
            />
          </View>
          <View>
            <Text style={styles.dateTitle}>Date and time</Text>
            <CustomDatePicker
              control={control}
              name="startDate"
              title="Choose date"
              mode="date"
            />
            <DateFilter
              currentStartDate={watch('startDate')}
              currentEndDate={watch('endDate')}
              onPressHandler={setValue}
            />
            <View style={styles.timeContainer}>
              <CustomDatePicker
                inputWidth="45%"
                label="Start Time"
                control={control}
                name="startDate"
                title="Choose date"
                mode="time"
              />
              <CustomDatePicker
                inputWidth="45%"
                label="End Time"
                control={control}
                name="endDate"
                title="Choose date"
                mode="time"
              />
            </View>
          </View>
        </View>
        <CustomButton
          fullWidth
          height={50}
          bgColor={COLORS.RED}
          onPress={handleSubmit(onSubmit)}>
          Create
        </CustomButton>
      </View>
    </DismissKeyboard>
  );
};
