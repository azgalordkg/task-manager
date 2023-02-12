import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import Realm from 'realm';

import { COLORS } from '@/constants';
import { findOne } from '@/services/realm';
import { CreateTaskData } from '@/types';

import { BreakLine, CustomButton, CustomDatePicker, Input } from '../../ui';
import DateFilter from '../DateFilter/DateFilter';
import { DismissKeyboard } from '../DismissKeyboard';
import styles from './CreateTaskForm.styles';
import { Props } from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({ onSubmit, editItemId }) => {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setMinutes(startDate.getMinutes() < 30 ? 0 : 30);
  endDate.setHours(
    startDate.getHours() + 1,
    startDate.getMinutes() < 30 ? 0 : 30,
  );

  const { control, handleSubmit, setValue, watch, reset } =
    useForm<CreateTaskData>({
      defaultValues: {
        startDate,
        endDate,
      },
    });

  useEffect(() => {
    if (editItemId) {
      // TODO replace any
      const task: Realm.Object<unknown, never> | any = findOne(editItemId);
      if (task) {
        setValue('name', task.name);
        if (task.description) {
          setValue('description', task.description);
        }
        if (task.startDate && task.endDate) {
          setValue('startDate', new Date(task.startDate));
          setValue('endDate', new Date(task.endDate));
        }
      }
    } else {
      reset();
    }
  }, [editItemId]);

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {editItemId ? 'Edit task' : 'Create task'}
          </Text>
        </View>
        <BreakLine isDark />
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
            <Text style={styles.dateTitle}>Date</Text>
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
          {editItemId ? 'Edit' : 'Create'}
        </CustomButton>
      </View>
    </DismissKeyboard>
  );
};
