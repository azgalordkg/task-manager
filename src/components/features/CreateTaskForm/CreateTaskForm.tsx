import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, Text, View } from 'react-native';
import Realm from 'realm';

import { COLORS, createTaskFormSchema, REPEAT_LIST } from '@/constants';
import { findOne } from '@/services/realm';
import { CreateTaskData } from '@/types';

import {
  Checkbox,
  CustomButton,
  CustomDatePicker,
  Input,
  Select,
} from '../../ui';
import DateFilter from '../DateFilter/DateFilter';
import { DismissKeyboard } from '../DismissKeyboard';
import styles from './CreateTaskForm.styles';
import { Props } from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({ onSubmit, editItemId }) => {
  const startDate = new Date();
  const endDate = new Date();

  const [repeatValue, setRepeatValue] = useState('Never');

  startDate.setMinutes(startDate.getMinutes() < 30 ? 0 : 30);
  endDate.setHours(
    startDate.getHours() + 1,
    startDate.getMinutes() < 30 ? 0 : 30,
  );

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<CreateTaskData>({
    defaultValues: {
      startDate,
      endDate,
      hasDeadline: false,
    },
    mode: 'onBlur',
    resolver: yupResolver(createTaskFormSchema),
  });

  // TODO replace any
  const prepareEditData = (task: Realm.Object<unknown, never> | any) => {
    setValue('name', task.name);
    if (task.description) {
      setValue('description', task.description);
    }
    if (task.startDate && task.endDate) {
      setValue('startDate', new Date(task.startDate));
      setValue('endDate', new Date(task.endDate));
    }
    if (task.hasDeadline) {
      setValue('hasDeadline', true);
    }
  };

  useEffect(() => {
    if (editItemId) {
      const task = findOne(editItemId);
      if (task) {
        prepareEditData(task);
      }
    } else {
      reset();
    }
  }, [editItemId]);

  const timeInputWidth = Dimensions.get('window').width / 2 - 30;

  return (
    <DismissKeyboard>
      <View style={styles.contentWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {editItemId ? 'Edit task' : 'Create task'}
          </Text>
        </View>
        <View style={styles.fieldsWrapper}>
          <View style={styles.inputWrapper}>
            <Input
              control={control}
              name="name"
              placeholder="Name *"
              errorMessage={errors.name?.message}
            />
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
          <View style={styles.inputWrapper}>
            <Select
              onValueChange={setRepeatValue}
              items={REPEAT_LIST}
              value={repeatValue}
              label="Repeat"
            />
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.inputWrapper}>
              <CustomDatePicker
                label="Date *"
                control={control}
                name="startDate"
                title="Choose date"
                mode="date"
              />
            </View>
            <DateFilter
              currentStartDate={watch('startDate')}
              currentEndDate={watch('endDate')}
              onPressHandler={setValue}
            />
          </View>

          <Checkbox
            control={control}
            name="hasDeadline"
            onChange={value => setValue('hasDeadline', value)}
            label="Set due time"
          />
          {watch('hasDeadline') && (
            <View style={styles.timeContainer}>
              <CustomDatePicker
                inputWidth={timeInputWidth}
                label="Start Time"
                control={control}
                name="startDate"
                title="Choose date"
                mode="time"
              />
              <CustomDatePicker
                inputWidth={timeInputWidth}
                label="End Time"
                control={control}
                name="endDate"
                title="Choose date"
                mode="time"
              />
            </View>
          )}
        </View>

        <CustomButton
          fullWidth
          bgColor={COLORS.DARK_GREEN}
          onPress={handleSubmit(onSubmit)}
          disabled={!(isValid && isDirty)}>
          {editItemId ? 'Edit' : 'Create'}
        </CustomButton>
      </View>
    </DismissKeyboard>
  );
};
